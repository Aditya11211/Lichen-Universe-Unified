import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Atom, Shield } from 'lucide-react';

const AetherQuantumSimulator = () => {
  const [simResults, setSimResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      const data = [];
      // Simulation simplifiée pour le frontend
      for (let i = 0; i <= 50; i++) {
        const time = i * 0.1;
        const std = Math.exp(-time / 50) * (1 - 0.001 * i);
        const protection = 1 + 0.15 * Math.log(1 + i * 0.1);
        const golden = Math.exp(-time / (50 * protection)) * (1 - 0.001 * i / protection);
        data.push({ layer: i, standard: std, golden: golden });
      }
      setSimResults(data);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl border border-cyan-500/30">
      <div className="flex items-center gap-3 mb-6">
        <Atom className="w-8 h-8 text-cyan-400 animate-spin-slow" />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          AETHER Quantum Simulator V3
        </h2>
      </div>
      <button onClick={runSimulation} disabled={isRunning} className="bg-cyan-600 px-4 py-2 rounded font-bold">
        {isRunning ? 'Running...' : 'Lancer Simulation'}
      </button>
      {simResults && (
        <div className="h-64 w-full mt-6 bg-slate-800/50 rounded-lg p-4">
          <ResponsiveContainer>
            <LineChart data={simResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="layer" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 1]} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
              <Legend />
              <Line type="monotone" dataKey="standard" stroke="#ef4444" name="Standard (π/2)" />
              <Line type="monotone" dataKey="golden" stroke="#22d3ee" name="Aether (Φ)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default AetherQuantumSimulator;
