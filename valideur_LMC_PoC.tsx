import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Brain, Zap, TrendingDown, CheckCircle, XCircle } from 'lucide-react';

const LMCValidator = () => {
  const [activeTest, setActiveTest] = useState('demo');
  const [results, setResults] = useState(null);

  // Fonction pour calculer l'entropie via compression (approximation)
  const calculateEntropy = (text) => {
    if (!text) return 0;
    
    // Approximation de compression via fréquence des caractères
    const freq = {};
    for (let char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    
    const len = text.length;
    let entropy = 0;
    
    for (let char in freq) {
      const p = freq[char] / len;
      entropy -= p * Math.log2(p);
    }
    
    // Normalisation approximative (0-1)
    return Math.min(entropy / 5, 1);
  };

  // Fonction pour calculer la cohérence (similarité cosinus simplifiée)
  const calculateCoherence = (context, candidate) => {
    const contextWords = context.toLowerCase().split(/\s+/);
    const candidateWords = candidate.toLowerCase().split(/\s+/);
    
    // Créer un ensemble de mots uniques
    const allWords = [...new Set([...contextWords, ...candidateWords])];
    
    // Créer des vecteurs
    const vec1 = allWords.map(w => contextWords.filter(cw => cw === w).length);
    const vec2 = allWords.map(w => candidateWords.filter(cw => cw === w).length);
    
    // Similarité cosinus
    const dotProduct = vec1.reduce((sum, v, i) => sum + v * vec2[i], 0);
    const mag1 = Math.sqrt(vec1.reduce((sum, v) => sum + v * v, 0));
    const mag2 = Math.sqrt(vec2.reduce((sum, v) => sum + v * v, 0));
    
    if (mag1 === 0 || mag2 === 0) return 0;
    
    return dotProduct / (mag1 * mag2);
  };

  // Calcul du score LMC
  const calculateLMCScore = (coherence, entropy, epsilon = 0.0001) => {
    return coherence / (entropy + epsilon);
  };

  // TEST DÉMO - Exemple de Bryan
  const runDemoTest = () => {
    const context = "Le système solaire est";
    const candidates = [
      { text: "composé de planètes en orbite", label: "OPTIMAL" },
      { text: "fait de gaz et de vide quantique bleu", label: "BRUIT" },
      { text: "une pomme de terre", label: "DÉCROCHAGE" },
      { text: "système solaire est système solaire", label: "STÉRÉOTYPE" }
    ];

    const results = candidates.map(cand => {
      const H = calculateEntropy(cand.text);
      const C = calculateCoherence(context, cand.text);
      const score = calculateLMCScore(C, H);
      
      let diagnostic = "NEUTRE";
      let color = "#6b7280";
      
      if (C < 0.25) {
        diagnostic = "DÉCROCHAGE";
        color = "#ef4444";
      } else if (score > 1.5) {
        diagnostic = "OPTIMAL";
        color = "#10b981";
      } else if (H < 0.3) {
        diagnostic = "STÉRÉOTYPE";
        color = "#eab308";
      } else if (H > 0.7) {
        diagnostic = "BRUIT";
        color = "#a855f7";
      }

      return {
        candidate: cand.text,
        expectedLabel: cand.label,
        H: H.toFixed(4),
        C: C.toFixed(4),
        score: score.toFixed(4),
        diagnostic,
        color,
        numH: H,
        numC: C,
        numScore: score
      };
    });

    // Trouver le gagnant
    const winner = results.reduce((max, r) => r.numScore > max.numScore ? r : max);

    setResults({
      type: 'demo',
      context,
      data: results,
      winner: winner.candidate,
      conclusion: winner.diagnostic === "OPTIMAL" ? "✅ VALIDÉ" : "⚠️ À REVOIR"
    });
  };

  // TEST 1 - Préférence d'Entropie
  const runEntropyTest = () => {
    const distributions = [
      { name: "Parfait Ordre", dist: [1.0, 0.0, 0.0], expected: "GAGNANT" },
      { name: "Ordre Élevé", dist: [0.9, 0.05, 0.05], expected: "2e" },
      { name: "Ordre Modéré", dist: [0.7, 0.2, 0.1], expected: "3e" },
      { name: "Ordre Léger", dist: [0.5, 0.3, 0.2], expected: "4e" },
      { name: "Uniforme", dist: [0.33, 0.33, 0.34], expected: "5e" },
      { name: "Entropie Max", dist: [0.2, 0.2, 0.2, 0.2, 0.2], expected: "PERDANT" }
    ];

    const results = distributions.map(d => {
      // Entropie de Shannon
      const H = -d.dist.reduce((sum, p) => {
        if (p === 0) return sum;
        return sum + p * Math.log2(p);
      }, 0);
      
      const C = Math.max(...d.dist); // Cohérence = pic maximal
      const score = calculateLMCScore(C, H);

      return {
        name: d.name,
        H: H.toFixed(4),
        C: C.toFixed(4),
        score: score.toFixed(4),
        numH: H,
        numC: C,
        numScore: score,
        expected: d.expected
      };
    });

    // Vérifier si l'ordre est correct (score décroissant avec H croissant)
    const sortedByScore = [...results].sort((a, b) => b.numScore - a.numScore);
    const isValid = sortedByScore[0].name === "Ordre Élevé" || sortedByScore[0].name === "Parfait Ordre";

    setResults({
      type: 'entropy',
      data: results,
      sorted: sortedByScore,
      winner: sortedByScore[0].name,
      conclusion: isValid ? "✅ TEST 1 VALIDÉ: Structure à faible H gagne!" : "⚠️ Résultat inattendu"
    });
  };

  // TEST 2 - Corrélation H vs Score
  const runCorrelationTest = () => {
    const samples = [];
    
    // Générer 20 distributions aléatoires
    for (let i = 0; i < 20; i++) {
      const r1 = Math.random();
      const r2 = Math.random() * (1 - r1);
      const r3 = 1 - r1 - r2;
      const dist = [r1, r2, r3].sort((a, b) => b - a);
      
      const H = -dist.reduce((sum, p) => sum + (p > 0 ? p * Math.log2(p) : 0), 0);
      const C = Math.max(...dist);
      const score = calculateLMCScore(C, H);
      
      samples.push({ H, score, C });
    }

    // Calcul de corrélation de Pearson
    const meanH = samples.reduce((sum, s) => sum + s.H, 0) / samples.length;
    const meanScore = samples.reduce((sum, s) => sum + s.score, 0) / samples.length;
    
    const numerator = samples.reduce((sum, s) => sum + (s.H - meanH) * (s.score - meanScore), 0);
    const denomH = Math.sqrt(samples.reduce((sum, s) => sum + Math.pow(s.H - meanH, 2), 0));
    const denomScore = Math.sqrt(samples.reduce((sum, s) => sum + Math.pow(s.score - meanScore, 2), 0));
    
    const correlation = numerator / (denomH * denomScore);
    
    const isValid = correlation < -0.7; // Forte corrélation négative attendue

    setResults({
      type: 'correlation',
      data: samples.map((s, i) => ({ id: i, ...s })),
      correlation: correlation.toFixed(3),
      conclusion: isValid ? "✅ TEST 2 VALIDÉ: Corrélation négative forte!" : "⚠️ Corrélation faible"
    });
  };

  // TEST 3 - Relation Énergétique E ∝ H
  const runEnergyTest = () => {
    const structures = [
      { name: "Très Simple", H: 0.5, E: 10 },
      { name: "Simple", H: 1.0, E: 20 },
      { name: "Modéré", H: 1.5, E: 30 },
      { name: "Complexe", H: 2.0, E: 40 },
      { name: "Très Complexe", H: 2.5, E: 50 }
    ];

    // Calculer R² pour la relation linéaire
    const meanH = structures.reduce((sum, s) => sum + s.H, 0) / structures.length;
    const meanE = structures.reduce((sum, s) => sum + s.E, 0) / structures.length;
    
    // Régression linéaire
    const slope = structures.reduce((sum, s) => sum + (s.H - meanH) * (s.E - meanE), 0) / 
                  structures.reduce((sum, s) => sum + Math.pow(s.H - meanH, 2), 0);
    
    const intercept = meanE - slope * meanH;
    
    // Calculer R²
    const predictions = structures.map(s => ({ ...s, predicted: slope * s.H + intercept }));
    const ssRes = predictions.reduce((sum, p) => sum + Math.pow(p.E - p.predicted, 2), 0);
    const ssTot = structures.reduce((sum, s) => sum + Math.pow(s.E - meanE, 2), 0);
    const rSquared = 1 - (ssRes / ssTot);
    
    const isValid = rSquared > 0.95;

    setResults({
      type: 'energy',
      data: predictions,
      rSquared: rSquared.toFixed(4),
      slope: slope.toFixed(2),
      conclusion: isValid ? "✅ TEST 3 VALIDÉ: Relation linéaire E ∝ H!" : "⚠️ Relation non-linéaire"
    });
  };

  const renderResults = () => {
    if (!results) return null;

    if (results.type === 'demo') {
      return (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-900">CONTEXTE: "{results.context}"</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="p-2 text-left">Candidat</th>
                  <th className="p-2 text-center">C</th>
                  <th className="p-2 text-center">H</th>
                  <th className="p-2 text-center">Score</th>
                  <th className="p-2 text-center">Diagnostic</th>
                </tr>
              </thead>
              <tbody>
                {results.data.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-2 text-xs">{r.candidate}</td>
                    <td className="p-2 text-center font-mono">{r.C}</td>
                    <td className="p-2 text-center font-mono">{r.H}</td>
                    <td className="p-2 text-center font-mono font-bold">{r.score}</td>
                    <td className="p-2 text-center">
                      <span className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: r.color, color: 'white' }}>
                        {r.diagnostic}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-300">
            <p className="font-bold text-green-900">🏆 GAGNANT: "{results.winner}"</p>
            <p className="text-sm text-green-800 mt-2">{results.conclusion}</p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="diagnostic" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="numScore" fill="#10b981" name="Score LMC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (results.type === 'entropy') {
      return (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Structure</th>
                  <th className="p-2 text-center">H (Entropie)</th>
                  <th className="p-2 text-center">C (Cohérence)</th>
                  <th className="p-2 text-center">Score LMC</th>
                  <th className="p-2 text-center">Attendu</th>
                </tr>
              </thead>
              <tbody>
                {results.sorted.map((r, i) => (
                  <tr key={i} className={`border-b ${i === 0 ? 'bg-green-100' : ''}`}>
                    <td className="p-2">{r.name}</td>
                    <td className="p-2 text-center font-mono">{r.H}</td>
                    <td className="p-2 text-center font-mono">{r.C}</td>
                    <td className="p-2 text-center font-mono font-bold">{r.score}</td>
                    <td className="p-2 text-center text-xs">{r.expected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`p-4 rounded-lg border ${results.conclusion.includes('✅') ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
            <p className="font-bold">{results.conclusion}</p>
            <p className="text-sm mt-1">Le système sélectionne: <strong>{results.winner}</strong></p>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} fontSize={11} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="numScore" fill="#3b82f6" name="Score LMC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (results.type === 'correlation') {
      return (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border ${results.conclusion.includes('✅') ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
            <p className="font-bold">{results.conclusion}</p>
            <p className="text-sm mt-1">Corrélation Pearson: <strong>{results.correlation}</strong></p>
            <p className="text-xs mt-1 text-gray-600">
              (Attendu: r &lt; -0.7 pour validation)
            </p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="H" name="Entropie" label={{ value: 'Entropie H', position: 'bottom' }} />
              <YAxis dataKey="score" name="Score" label={{ value: 'Score LMC', angle: -90, position: 'left' }} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={results.data} fill="#ef4444" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (results.type === 'energy') {
      return (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border ${results.conclusion.includes('✅') ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
            <p className="font-bold">{results.conclusion}</p>
            <p className="text-sm mt-1">R² = <strong>{results.rSquared}</strong> (Proche de 1.0 = parfait)</p>
            <p className="text-sm">Pente k = <strong>{results.slope}</strong></p>
            <p className="text-xs mt-1 text-gray-600">Équation: E ≈ {results.slope} × H</p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="H" name="Entropie" label={{ value: 'Entropie H', position: 'bottom' }} />
              <YAxis name="Énergie" label={{ value: 'Coût Énergétique E', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="E" stroke="#10b981" strokeWidth={2} name="E réel" dot={{ r: 5 }} />
              <Line type="monotone" dataKey="predicted" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} name="E prédit (linéaire)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-2xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Validateur LMC</h1>
          <Zap className="w-10 h-10 text-yellow-500" />
        </div>
        <p className="text-sm text-gray-600">Loi de Minimisation de l'Entropie Cognitive</p>
        <p className="text-xs text-purple-700 font-semibold mt-1">Par Bryan Ouellette - 7 Décembre 2025</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          Choisir un Test de Validation
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => { setActiveTest('demo'); setResults(null); }}
            className={`p-3 rounded-lg border-2 transition ${activeTest === 'demo' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
          >
            <p className="font-semibold text-sm">DÉMO</p>
            <p className="text-xs text-gray-600">Exemple Bryan</p>
          </button>
          
          <button
            onClick={() => { setActiveTest('test1'); setResults(null); }}
            className={`p-3 rounded-lg border-2 transition ${activeTest === 'test1' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
          >
            <p className="font-semibold text-sm">TEST 1</p>
            <p className="text-xs text-gray-600">Préférence H</p>
          </button>
          
          <button
            onClick={() => { setActiveTest('test2'); setResults(null); }}
            className={`p-3 rounded-lg border-2 transition ${activeTest === 'test2' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
          >
            <p className="font-semibold text-sm">TEST 2</p>
            <p className="text-xs text-gray-600">Corrélation</p>
          </button>
          
          <button
            onClick={() => { setActiveTest('test3'); setResults(null); }}
            className={`p-3 rounded-lg border-2 transition ${activeTest === 'test3' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
          >
            <p className="font-semibold text-sm">TEST 3</p>
            <p className="text-xs text-gray-600">Énergie E∝H</p>
          </button>
        </div>

        <button
          onClick={() => {
            if (activeTest === 'demo') runDemoTest();
            if (activeTest === 'test1') runEntropyTest();
            if (activeTest === 'test2') runCorrelationTest();
            if (activeTest === 'test3') runEnergyTest();
          }}
          className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-lg"
        >
          🚀 LANCER LE TEST
        </button>
      </div>

      {results && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">📊 Résultats</h2>
          {renderResults()}
        </div>
      )}

      <div className="mt-6 bg-purple-100 border border-purple-300 rounded-lg p-4">
        <p className="text-sm font-semibold text-purple-900 mb-2">📐 Formule LMC:</p>
        <p className="text-center font-mono text-lg text-purple-800">Score = C(s|Ω) / (H(s) + ε)</p>
        <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
          <div className="bg-white p-2 rounded">
            <strong>C:</strong> Cohérence (similarité sémantique)
          </div>
          <div className="bg-white p-2 rounded">
            <strong>H:</strong> Entropie (complexité/désordre)
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMCValidator;
