import React, { useState } from 'react';
import { Menu, X, Home, HardDrive, Activity, Network, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'CRAID', path: '/craid', icon: <HardDrive size={20} /> },
    { name: 'TRPU', path: '/trpu', icon: <Activity size={20} /> },
    { name: 'NGC', path: '/ngc', icon: <Network size={20} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen overflow-hidden bg-dark text-slate-200">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800 bg-card/50 backdrop-blur-sm">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <div>
              <h1 className="font-bold text-white tracking-tight">Bryan Ouellet</h1>
              <p className="text-xs text-slate-400">Architecte Système Cognitif</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800 space-y-4">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Socials</p>
            <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:bryan.ouellet@domaine.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
        </div>
      </aside>

      {/* Mobile Header & Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-card/80 backdrop-blur-md z-20">
          <div className="font-bold text-lg text-white">Bryan Ouellet</div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-300 hover:bg-slate-800 rounded-md"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="absolute inset-0 z-10 bg-dark/95 md:hidden pt-20 px-6 space-y-4">
             {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-lg ${
                isActive(item.path)
                  ? 'bg-primary/20 text-primary'
                  : 'text-slate-300'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
          </div>
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth p-6 md:p-12 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
