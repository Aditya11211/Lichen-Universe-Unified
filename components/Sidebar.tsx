import React from 'react';
import { Home, Database, User, LogOut, Bell, Search, Mail, MoreHorizontal, PenTool } from 'lucide-react';
import { User as UserType } from '../types';

interface NavigationProps {
  currentPage: string;
  setPage: (page: string) => void;
  user: UserType;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage, user, onLogout }) => {
  const navItems = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'architecture', label: 'Architecture', icon: Database },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="h-screen fixed left-0 top-0 flex flex-col justify-between px-2 xl:px-4 py-4 w-[80px] xl:w-[275px] border-r border-slate-800 bg-slate-950 z-50">
      <div className="flex flex-col gap-4">
        {/* Logo */}
        <div className="px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`group flex items-center xl:gap-4 p-3 rounded-full transition-all w-fit xl:w-full hover:bg-slate-900 ${
                currentPage === item.id ? 'font-bold' : 'font-normal'
              }`}
            >
              <item.icon className={`w-7 h-7 ${currentPage === item.id ? 'text-slate-100 fill-slate-100' : 'text-slate-100'}`} />
              <span className="hidden xl:block text-xl text-slate-100">{item.label}</span>
            </button>
          ))}
          <button className="group flex items-center xl:gap-4 p-3 rounded-full transition-all w-fit xl:w-full hover:bg-slate-900">
            <MoreHorizontal className="w-7 h-7 text-slate-100" />
            <span className="hidden xl:block text-xl text-slate-100">More</span>
          </button>
        </nav>

        {/* Pulse Button */}
        <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-4 xl:py-3 xl:px-8 mt-4 shadow-lg shadow-violet-900/20 transition-all flex items-center justify-center">
            <PenTool className="w-6 h-6 xl:hidden" />
            <span className="hidden xl:block text-lg font-bold">Pulse</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="mb-4">
        <button 
            onClick={onLogout}
            className="flex items-center gap-3 p-3 rounded-full hover:bg-slate-900 w-full transition text-left group"
        >
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600">
                {user.username.substring(0,2).toUpperCase()}
            </div>
            <div className="hidden xl:block flex-1">
                <p className="text-sm font-bold text-slate-100">{user.displayName}</p>
                <p className="text-sm text-slate-500">@{user.username}</p>
            </div>
            <div className="hidden xl:block">
                <MoreHorizontal className="w-4 h-4 text-slate-500" />
            </div>
        </button>
      </div>
    </div>
  );
};