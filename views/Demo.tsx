import React, { useState } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle, Database } from 'lucide-react';

export const Demo: React.FC = () => {
  const [inputJson, setInputJson] = useState('{\n  "id": 123,\n  "type": "sensor",\n  "lat": 48.8566,\n  "lon": 2.3522\n}');
  const [outputHex, setOutputHex] = useState<string | null>(null);
  const [decodedJson, setDecodedJson] = useState('');
  const [integrity, setIntegrity] = useState<'pending' | 'valid' | 'corrupted' | null>(null);

  // Simulate encoding
  const handleEncode = () => {
    try {
        JSON.parse(inputJson);
        // Simulation: Create a 62-byte hex string (124 chars)
        let hex = '';
        for (let i = 0; i < 62; i++) {
            hex += Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        }
        setOutputHex(hex);
        setIntegrity(null);
        setDecodedJson('');
    } catch (e) {
        alert("JSON Invalide");
    }
  };

  const handleDecode = () => {
    if (!outputHex) return;
    setDecodedJson(inputJson); // Ideally we would parse the hex back, but this is a simulation
  };

  const handleVerify = () => {
    if (!outputHex) return;
    setIntegrity(integrity === 'corrupted' ? 'corrupted' : 'valid');
  };

  const handleCorrupt = () => {
    if (!outputHex) return;
    // Flip a char to simulate corruption
    const chars = outputHex.split('');
    const idx = Math.floor(Math.random() * chars.length);
    chars[idx] = chars[idx] === '0' ? '1' : '0';
    setOutputHex(chars.join(''));
    setIntegrity('corrupted');
  };

  const handleClear = () => {
    setInputJson('{\n  "id": 123,\n  "type": "sensor",\n  "lat": 48.8566,\n  "lon": 2.3522\n}');
    setOutputHex(null);
    setDecodedJson('');
    setIntegrity(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Simulateur FC-496 (WASM)</h2>
        <p className="text-slate-400">Encodez des données JSON en cellules fractales de 496 bits.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
            <div className="bg-void-900 border border-slate-700 rounded-lg p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <Database size={16} className="text-cyan-400"/> Entrée JSON
                    </h3>
                    <div className="flex gap-2">
                        <button onClick={handleEncode} className="px-3 py-1.5 text-xs font-bold bg-lichen-600 hover:bg-lichen-500 text-white rounded flex items-center gap-1 transition-colors">
                            <Play size={12} /> Encoder
                        </button>
                        <button onClick={handleClear} className="px-3 py-1.5 text-xs font-bold bg-slate-700 hover:bg-slate-600 text-white rounded flex items-center gap-1 transition-colors">
                            <RotateCcw size={12} /> Reset
                        </button>
                    </div>
                </div>
                <textarea 
                    value={inputJson}
                    onChange={(e) => setInputJson(e.target.value)}
                    className="w-full h-48 bg-void-950 border border-slate-800 rounded p-3 text-sm font-mono text-slate-300 focus:outline-none focus:border-lichen-500/50 resize-none"
                    spellCheck={false}
                />
            </div>

            <div className="bg-void-900 border border-slate-700 rounded-lg p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold">Sortie JSON (Décodée)</h3>
                </div>
                <textarea 
                    value={decodedJson}
                    readOnly
                    placeholder="En attente de décodage..."
                    className="w-full h-48 bg-void-950 border border-slate-800 rounded p-3 text-sm font-mono text-slate-500 focus:outline-none resize-none"
                />
            </div>
        </div>

        {/* Output/Hex Section */}
        <div className="space-y-4">
            <div className="bg-void-900 border border-slate-700 rounded-lg p-5 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <ShieldCheckIcon status={integrity} /> Cellule FC-496
                    </h3>
                    <div className="flex gap-2 flex-wrap justify-end">
                        <button 
                            onClick={handleDecode} 
                            disabled={!outputHex}
                            className="px-3 py-1.5 text-xs font-bold bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded transition-colors"
                        >
                            Décoder
                        </button>
                        <button 
                            onClick={handleVerify}
                            disabled={!outputHex}
                            className="px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded transition-colors"
                        >
                            Vérifier
                        </button>
                        <button 
                            onClick={handleCorrupt}
                            disabled={!outputHex}
                            className="px-3 py-1.5 text-xs font-bold bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded transition-colors"
                        >
                            Corrompre
                        </button>
                    </div>
                </div>
                
                <div className="flex-grow bg-black rounded border border-slate-800 p-4 font-mono text-xs break-all leading-relaxed relative overflow-hidden group">
                    {outputHex ? (
                        <span className="text-lichen-400">{outputHex.match(/.{1,2}/g)?.join(' ')}</span>
                    ) : (
                        <span className="text-slate-700 italic select-none">Aucune donnée encodée...</span>
                    )}
                </div>

                <div className="mt-4 flex justify-between items-center text-xs text-slate-400 border-t border-slate-800 pt-4">
                    <span>Taille: {outputHex ? '62 octets (496 bits)' : '0 octets'}</span>
                    <span className={`font-bold flex items-center gap-1 ${
                        integrity === 'valid' ? 'text-green-400' : integrity === 'corrupted' ? 'text-red-400' : 'text-slate-500'
                    }`}>
                        {integrity === 'valid' && <> <CheckCircle size={12}/> Intégrité Validée</>}
                        {integrity === 'corrupted' && <> <ShieldAlert size={12}/> Données Corrompues</>}
                        {!integrity && 'Intégrité non vérifiée'}
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const ShieldCheckIcon: React.FC<{status: 'pending' | 'valid' | 'corrupted' | null}> = ({ status }) => {
    if (status === 'valid') return <ShieldAlert className="text-green-400" size={16} />;
    if (status === 'corrupted') return <ShieldAlert className="text-red-400" size={16} />;
    return <ShieldAlert className="text-slate-400" size={16} />;
};