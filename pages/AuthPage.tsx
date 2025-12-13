import React, { useState } from 'react';
import { mockBackend } from '../services/mockDb';
import { User } from '../types';
import { Loader2, ArrowRight } from 'lucide-react';
import { FractalBackground } from '../components/FractalBackground';

interface AuthPageProps {
  onLoginSuccess: (user: User) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@pulsar.com'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await mockBackend.login(email);
      onLoginSuccess(response.user);
    } catch (err) {
      setError('User not found. Try "admin@pulsar.com"');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 relative overflow-hidden">
        <FractalBackground />

        {/* Left Half - Branding */}
        <div className="hidden lg:flex w-1/2 items-center justify-center relative z-10">
            <div className="text-center relative">
                 <div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                <svg viewBox="0 0 24 24" fill="none" className="w-[300px] h-[300px] text-slate-100 mx-auto mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="0.5"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="0.5"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
                <h1 className="text-7xl font-bold text-white mb-4 tracking-tighter drop-shadow-xl">PULSAR</h1>
                <p className="text-xl text-violet-200 font-light tracking-wide">The Golden Ratio of Social Connection.</p>
            </div>
        </div>

        {/* Right Half - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 z-10 bg-slate-950/80 backdrop-blur-xl border-l border-slate-800">
            <div className="w-full max-w-md">
                 <div className="mb-12 lg:hidden text-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-slate-100 mx-auto mb-4">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <h1 className="text-4xl font-bold text-white">PULSAR</h1>
                 </div>

                <h2 className="text-3xl font-bold text-white mb-8">Sign in to Pulsar</h2>

                <button className="w-full bg-slate-100 hover:bg-white text-black font-bold py-2.5 rounded-full mb-4 transition shadow-lg shadow-white/10">
                    Sign in with Google
                </button>
                <button className="w-full bg-black border border-slate-700 hover:bg-slate-900 text-white font-bold py-2.5 rounded-full mb-8 transition">
                    Sign in with Apple
                </button>

                <div className="flex items-center mb-8">
                    <div className="flex-1 border-t border-slate-700"></div>
                    <span className="px-3 text-slate-500 text-sm">or</span>
                    <div className="flex-1 border-t border-slate-700"></div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all backdrop-blur-sm"
                        placeholder="Phone, email, or username"
                        required
                    />
                </div>

                {error && (
                    <div className="text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-4 rounded-full focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg shadow-violet-900/40"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </div>
                    ) : (
                        'Next'
                    )}
                </button>

                <button className="w-full bg-black border border-slate-600 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-full mt-4 transition">
                    Forgot password?
                </button>
                </form>

                <div className="mt-12 text-slate-500 text-sm">
                    Don't have an account? <span className="text-violet-500 hover:underline cursor-pointer">Sign up</span>
                </div>
                
                 <div className="mt-6 text-center text-sm text-slate-500">
                    <p className="mb-2">Demo Access:</p>
                    <div className="flex gap-2 justify-center font-mono text-xs">
                        <span className="bg-slate-900 px-2 py-1 rounded cursor-pointer hover:text-violet-400 border border-slate-800" onClick={() => setEmail('admin@pulsar.com')}>admin@pulsar.com</span>
                        <span className="bg-slate-900 px-2 py-1 rounded cursor-pointer hover:text-violet-400 border border-slate-800" onClick={() => setEmail('fastapi@code.com')}>fastapi@code.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};