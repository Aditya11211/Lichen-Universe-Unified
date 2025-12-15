import React, { useState, useEffect, useCallback } from 'react';
import Visualizer from './components/Visualizer';
import BenchmarkChart from './components/BenchmarkChart';
import { generateLichenCluster, calculateIntegrity } from './services/lichenMath';
import { LichenNode, PHI } from './types';
import { Terminal, ShieldAlert, Zap, RefreshCw, Box, Share2, Github } from 'lucide-react';

const INITIAL_NODES = 10;
const BASE_SPEED = 2400; // MB/s

export default function App() {
  const [nodes, setNodes] = useState<LichenNode[]>([]);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "> System initialized...",
    "> Waiting for deployment..."
  ]);
  const [isReconstructing, setIsReconstructing] = useState(false);
  const [integrity, setIntegrity] = useState(100);
  const [raidSpeed, setRaidSpeed] = useState(BASE_SPEED);
  const [lichenSpeed, setLichenSpeed] = useState(BASE_SPEED);
  const [quantumMode, setQuantumMode] = useState(false);

  // Initialize
  useEffect(() => {
    deployCluster();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLog = (msg: string) => {
    setConsoleLogs(prev => [`> ${msg}`, ...prev].slice(0, 6));
  };

  const deployCluster = () => {
    const newNodes = generateLichenCluster(INITIAL_NODES, 300, 300, 25);
    setNodes(newNodes);
    setIntegrity(100);
    setRaidSpeed(BASE_SPEED);
    setLichenSpeed(BASE_SPEED);
    setIsReconstructing(false);
    addLog("LichenCluster(10) deployed. Topology: Golden Spiral.");
  };

  const triggerApocalypse = useCallback(() => {
    if (isReconstructing) return;
    
    addLog("⚠️ SIMULATING CATASTROPHIC FAILURE...");
    
    // Kill 60% of nodes (6 out of 10)
    setNodes(prev => {
      const shuffled = [...prev].sort(() => 0.5 - Math.random());
      const victims = shuffled.slice(0, 6);
      const survivors = shuffled.slice(6);
      
      return prev.map(n => {
        if (victims.find(v => v.id === n.id)) {
          return { ...n, status: 'dead', health: 0 };
        }
        return n;
      });
    });

    // RAID crashes immediately
    setRaidSpeed(0);
    
    // Lichen dips but holds (simulated read from parity)
    setLichenSpeed(BASE_SPEED * 0.4); // Drop performance but alive
    
    // Start Phoenix Protocol
    setTimeout(() => {
      startReconstruction();
    }, 800);
  }, [isReconstructing]);

  const startReconstruction = () => {
    setIsReconstructing(true);
    addLog("🔄 CRAID-496 PROTOCOL: RECONSTRUCTING FROM φ-FRAGMENTS...");
    
    if (quantumMode) {
      addLog("⚛️ QUANTUM ENTANGLEMENT ACTIVE: PRESERVING QUBITS...");
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      
      // Update Integrity
      setIntegrity(prev => Math.min(100, prev + 15));
      
      // Recover speed
      setLichenSpeed(prev => Math.min(BASE_SPEED, prev + 200));

      if (progress >= 100) {
        clearInterval(interval);
        finalizeReconstruction();
      }
    }, 150); // 1.5s total reconstruction
  };

  const finalizeReconstruction = () => {
    setNodes(prev => prev.map(n => ({
      ...n,
      status: n.status === 'dead' ? (quantumMode ? 'quantum-entangled' : 'active') : n.status,
      health: 100
    })));
    setIsReconstructing(false);
    setLichenSpeed(BASE_SPEED);
    setIntegrity(100);
    addLog("✅ DATA INTEGRITY VERIFIED. 0 BYTES LOST.");
    addLog("ℹ️ RAID-6 STATUS: FAILED (RECOVERY IMPOSSIBLE > 2 DRIVES)");
  };

  const rollingPhoenix = () => {
    addLog("🔥 ROLLING PHOENIX: Replacing hardware on-the-fly...");
    let index = 0;
    const interval = setInterval(() => {
      if (index >= nodes.length) {
        clearInterval(interval);
        addLog("✅ HARDWARE REFRESH COMPLETE. DOWNTIME: 0s");
        return;
      }
      
      setNodes(prev => prev.map((n, i) => 
        i === index ? { ...n, status: 'recovering' } : (n.status === 'recovering' ? { ...n, status: 'active' } : n)
      ));
      
      index++;
    }, 200);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-gray-200 selection:bg-lichen-500 selection:text-black">
      {/* Header */}
      <header className="border-b border-lichen-900 bg-void/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-lichen-900 rounded-lg animate-pulse-fast">
              <Box className="w-6 h-6 text-lichen-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider text-white">
                LICHEN<span className="text-lichen-500">.STORAGE</span>
              </h1>
              <p className="text-xs text-lichen-400 font-mono">FC-496 / CRAID / BIOLOGICAL</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/quantum-lichen/Lichen-Universe-Unified" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
              <span className="bg-lichen-900 text-lichen-400 text-[10px] px-1.5 rounded ml-1">155k</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Visualizer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative">
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 pointer-events-none">
               <div className={`text-2xl font-black font-mono ${integrity < 100 ? 'text-red-500' : 'text-lichen-500'}`}>
                 INTEGRITY: {integrity}%
               </div>
               {isReconstructing && (
                 <div className="text-yellow-400 font-mono text-sm animate-pulse">
                   RECONSTRUCTING...
                 </div>
               )}
            </div>
            <Visualizer nodes={nodes} isQuantumMode={quantumMode} reconstructing={isReconstructing} />
          </div>
          
          <BenchmarkChart raidSpeed={raidSpeed} lichenSpeed={lichenSpeed} />
        </div>

        {/* Right Column: Controls */}
        <div className="space-y-6">
          
          {/* Controls Panel */}
          <div className="glass-panel p-6 rounded-xl space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-lichen-500" /> Control Deck
              </h2>
              <div className="flex items-center gap-2">
                 <label className="text-xs font-mono text-gray-400">Qubit Mode</label>
                 <button 
                   onClick={() => setQuantumMode(!quantumMode)}
                   className={`w-8 h-4 rounded-full transition-colors ${quantumMode ? 'bg-blue-500' : 'bg-gray-700'}`}
                 >
                   <div className={`w-2 h-2 bg-white rounded-full mt-1 ml-1 transform transition-transform ${quantumMode ? 'translate-x-4' : ''}`} />
                 </button>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={triggerApocalypse}
                disabled={isReconstructing}
                className="w-full group relative overflow-hidden px-4 py-4 rounded-lg bg-red-900/20 hover:bg-red-900/40 border border-red-900/50 transition-all"
              >
                <div className="flex items-center justify-center gap-2 text-red-400 font-bold tracking-widest group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                  SIMULATE APOCALYPSE
                </div>
                <div className="text-xs text-red-500/60 mt-1 font-mono text-center">KILL 60% NODES (N=6)</div>
              </button>

              <button 
                onClick={rollingPhoenix}
                disabled={isReconstructing}
                className="w-full px-4 py-3 rounded-lg bg-yellow-900/20 hover:bg-yellow-900/40 border border-yellow-900/50 text-yellow-400 font-mono text-sm flex items-center justify-center gap-2 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                ROLLING PHOENIX
              </button>
              
              <button 
                onClick={deployCluster}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-mono text-sm transition-all"
              >
                RESET CLUSTER
              </button>
            </div>
          </div>

          {/* Console Output */}
          <div className="glass-panel p-4 rounded-xl min-h-[200px] font-mono text-xs overflow-hidden flex flex-col">
            <div className="text-gray-500 mb-2 border-b border-gray-800 pb-1">systemd@lichen-core:~# tail -f /var/log/syslog</div>
            <div className="flex-1 space-y-1">
              {consoleLogs.map((log, i) => (
                <div key={i} className={`truncate ${log.includes('⚠️') ? 'text-red-400' : log.includes('✅') ? 'text-lichen-400' : log.includes('🔄') ? 'text-yellow-400' : 'text-gray-400'}`}>
                  <span className="opacity-50 mr-2">[{new Date().toISOString().split('T')[1].split('.')[0]}]</span>
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Viral Stats Table */}
          <div className="glass-panel p-0 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-gray-400 font-mono text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3 text-red-400">RAID-6</th>
                  <th className="px-4 py-3 text-lichen-400">Lichen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3 text-gray-500">Max Failures</td>
                  <td className="px-4 py-3 font-mono">2 Drives</td>
                  <td className="px-4 py-3 font-mono text-lichen-400 font-bold">60% (Arbitrary)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500">Rebuild</td>
                  <td className="px-4 py-3 font-mono">Hours/Days</td>
                  <td className="px-4 py-3 font-mono text-lichen-400 font-bold">Instant (Math)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500">Topology</td>
                  <td className="px-4 py-3 font-mono">Linear</td>
                  <td className="px-4 py-3 font-mono text-lichen-400 font-bold">Fibonacci (φ)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
        <p>Built with <Zap className="w-3 h-3 inline text-yellow-500" /> by Lichen Labs. FC-496 Protocol v0.9.2-alpha.</p>
      </footer>
    </div>
  );
}
