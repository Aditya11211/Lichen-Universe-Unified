import React from 'react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    BarChart, Bar, Legend, AreaChart, Area
} from 'recharts';
import { Database, Server, Shield, Zap, TrendingUp, Cpu } from 'lucide-react';

const INDEX_PERFORMANCE_DATA = [
  { rows: '10k',  indexed: 5,   nonIndexed: 15 },
  { rows: '100k', indexed: 8,   nonIndexed: 120 },
  { rows: '500k', indexed: 12,  nonIndexed: 550 },
  { rows: '1M',   indexed: 15,  nonIndexed: 1200 },
  { rows: '5M',   indexed: 18,  nonIndexed: 5800 },
];

const SHARDING_GROWTH_DATA = [
  { year: '2023', rows: 1000000, shardSize: 1000000, unShardedQuery: 150 },
  { year: '2024', rows: 5000000, shardSize: 1250000, unShardedQuery: 800 },
  { year: '2025', rows: 15000000, shardSize: 1500000, unShardedQuery: 2400 },
  { year: '2026', rows: 35000000, shardSize: 1800000, unShardedQuery: 5000 },
];

export const ArchitectureDashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto pt-8 pb-20 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">System Architecture</h2>
        <p className="text-slate-400">Visualization of the backend scaling strategies discussed in design.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm font-semibold">Tech Stack</span>
                <Server className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">FastAPI + Go</div>
            <div className="text-xs text-green-400 mt-1">Hybrid Microservices</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm font-semibold">Database</span>
                <Database className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-xl font-bold text-white">PostgreSQL 15</div>
            <div className="text-xs text-slate-500 mt-1">Sharded by Time</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm font-semibold">Auth</span>
                <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-xl font-bold text-white">JWT + Rotation</div>
            <div className="text-xs text-slate-500 mt-1">Exp: 15min / 30d</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm font-semibold">Feed Latency</span>
                <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-xl font-bold text-white">&lt; 50ms</div>
            <div className="text-xs text-slate-500 mt-1">Indexed Query</div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Index Performance */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        Index Efficiency
                    </h3>
                    <p className="text-sm text-slate-400">Query Time (ms) vs Table Size</p>
                </div>
                <div className="text-xs font-mono bg-slate-900 p-2 rounded text-slate-300">
                    idx_posts_user_created
                </div>
            </div>
            
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={INDEX_PERFORMANCE_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="rows" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} 
                            itemStyle={{ color: '#f8fafc' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="indexed" name="Indexed (Composite)" stroke="#4ade80" strokeWidth={3} dot={{r: 4}} />
                        <Line type="monotone" dataKey="nonIndexed" name="Sequential Scan" stroke="#f87171" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
                * Without the composite index (user_id, created_at DESC), feed generation time explodes as table grows.
            </p>
        </div>

        {/* Sharding Strategy */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
             <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-400" />
                        Sharding vs Monolith
                    </h3>
                    <p className="text-sm text-slate-400">Simulated 3-Year Growth (1M -> 35M rows)</p>
                </div>
                 <div className="text-xs font-mono bg-slate-900 p-2 rounded text-slate-300">
                    posts_shard_2025
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={SHARDING_GROWTH_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} 
                        />
                        <Legend />
                        <Area type="monotone" dataKey="unShardedQuery" name="Monolith Query Cost" stackId="1" stroke="#f87171" fill="#f87171" fillOpacity={0.2} />
                        <Area type="monotone" dataKey="shardSize" name="Shard Size (Managed)" stackId="2" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
             <p className="text-xs text-slate-500 mt-4 italic">
                * Sharding maintains consistent performance (Blue) by keeping active indices small, preventing the monolith curve (Red).
            </p>
        </div>

        {/* Schema Visualization (Text Based) */}
        <div className="col-span-1 lg:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-slate-400" />
                Schema & Index Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
                <div>
                    <div className="text-blue-400 font-bold mb-2">TABLE: Posts</div>
                    <ul className="space-y-2 text-slate-300">
                        <li className="flex justify-between border-b border-slate-700 pb-1">
                            <span>id</span> <span className="text-slate-500">BIGSERIAL PK</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-700 pb-1">
                            <span>user_id</span> <span className="text-purple-400">FK (users)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-700 pb-1">
                            <span>content</span> <span className="text-slate-500">TEXT (500)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-700 pb-1">
                            <span>created_at</span> <span className="text-slate-500">TIMESTAMPTZ</span>
                        </li>
                    </ul>
                </div>
                <div>
                     <div className="text-green-400 font-bold mb-2">CRITICAL INDEXES</div>
                     <div className="space-y-3">
                        <div className="bg-slate-900 p-3 rounded border border-slate-700">
                            <p className="text-yellow-400 text-xs mb-1">Feed Query Optimization</p>
                            CREATE INDEX idx_posts_user_created ON posts (user_id, created_at DESC)
                        </div>
                        <div className="bg-slate-900 p-3 rounded border border-slate-700">
                            <p className="text-yellow-400 text-xs mb-1">Constraint Enforcement</p>
                            CREATE UNIQUE INDEX idx_follows_pair ON follows (follower_id, followee_id)
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};