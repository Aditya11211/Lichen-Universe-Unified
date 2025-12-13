import React from 'react';
import { ViewState } from '../types';
import { Atom, Cpu, Users, Terminal } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'landing', label: 'Lichen OS', icon: <Atom size={18} /> },
    { id: 'architecture', label: 'Core Arch', icon: <Cpu size={18} /> },
    { id: 'demo', label: 'Démo FC-496', icon: <Terminal size={18} /> },
    { id: 'community', label: 'Communauté', icon: <Users size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-void-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lichen-400 to-cyan-500 flex items-center justify-center">
                <span className="font-bold text-void-950">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">Lichen OS</span>
          </div>
          
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  currentView === item.id
                    ? 'bg-lichen-500/10 text-lichen-400 border border-lichen-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="hidden md:block">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};