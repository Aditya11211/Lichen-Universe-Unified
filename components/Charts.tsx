import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar
} from 'recharts';

// Data for Ouellet Effect: MCP decreases as time (dilation) increases or distance to horizon decreases
const ouelletData = Array.from({ length: 20 }, (_, i) => {
  const t = i; 
  // Simulation: MCP decays exponentially with 'time' (representing dilated time near horizon)
  const mcp = 12 * Math.exp(-0.3 * t); 
  return {
    time: t,
    mcp: mcp < 0.1 ? 0 : parseFloat(mcp.toFixed(2)),
    threshold: 1 // Perception threshold
  };
});

// Data for LCM Comparison
const lcmData = [
  { subject: 'Cohérence (C)', Claude: 0.79, ChatGPT: 0.73, fullMark: 1 },
  { subject: 'Harmonie (H)', Claude: 0.68, ChatGPT: 0.68, fullMark: 1 },
  { subject: 'Total (Σ)', Claude: 1.47, ChatGPT: 1.41, fullMark: 2 }, // Scaled down slightly for radar visualization fit
];

export const OuelletChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-2 font-sans text-gray-800">Dynamique de l'Effet Ouellet 404</h3>
      <p className="text-sm text-gray-500 mb-4 italic">
        Décroissance de la Métrique de Cohérence Perceptive (MCP) en fonction du temps dilaté ($t_d$).
        Zone critique : MCP &lt; 1.
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ouelletData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" label={{ value: 'Temps dilaté (t)', position: 'insideBottomRight', offset: -5 }} />
            <YAxis label={{ value: 'MCP', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
              labelStyle={{ color: '#666' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="mcp" stroke="#2563eb" strokeWidth={2} name="MCP (Cohérence)" dot={false} />
            <Line type="monotone" dataKey="threshold" stroke="#ef4444" strokeDasharray="5 5" name="Seuil Critique (404)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const LCMChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold mb-2 font-sans text-gray-800">Comparaison LCM : Claude vs ChatGPT</h3>
      <p className="text-sm text-gray-500 mb-4 italic">
        Visualisation des composantes C (Densité/Cohérence) et H (Courbure/Harmonie).
      </p>
      <div className="h-64 w-full flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={lcmData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 1.6]} />
            <Radar name="Claude" dataKey="Claude" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.3} />
            <Radar name="ChatGPT" dataKey="ChatGPT" stroke="#059669" fill="#059669" fillOpacity={0.3} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};