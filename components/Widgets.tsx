import React, { useEffect, useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { mockBackend } from '../services/mockDb';
import { TrendingTopic, FollowSuggestion } from '../types';

export const Widgets: React.FC = () => {
    const [trends, setTrends] = useState<TrendingTopic[]>([]);
    const [suggestions, setSuggestions] = useState<FollowSuggestion[]>([]);

    useEffect(() => {
        mockBackend.getTrending().then(setTrends);
        mockBackend.getSuggestions().then(setSuggestions);
    }, []);

    return (
        <div className="hidden lg:block w-[350px] pl-8 py-4 h-screen sticky top-0 overflow-y-auto no-scrollbar">
            {/* Search Bar */}
            <div className="sticky top-0 bg-slate-950 pb-4 z-10">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-500 group-focus-within:text-violet-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Pulsar"
                        className="w-full bg-slate-900 text-slate-200 rounded-full py-3 pl-12 pr-4 border border-transparent focus:border-violet-500 focus:bg-black focus:outline-none transition-all placeholder-slate-500"
                    />
                </div>
            </div>

            {/* Trending Section */}
            <div className="bg-slate-900/50 rounded-2xl border border-slate-800 mb-4 overflow-hidden">
                <h2 className="text-xl font-bold px-4 py-3 text-slate-100">What's happening</h2>
                <div>
                    {trends.map((trend) => (
                        <div key={trend.id} className="px-4 py-3 hover:bg-slate-800/50 transition cursor-pointer relative">
                            <div className="flex justify-between text-xs text-slate-500">
                                <span>{trend.category}</span>
                                <MoreHorizontal className="w-4 h-4 hover:text-violet-400" />
                            </div>
                            <div className="font-bold text-slate-100 mt-0.5">{trend.topic}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{trend.postsCount} posts</div>
                        </div>
                    ))}
                    <div className="px-4 py-3 text-violet-400 text-sm hover:bg-slate-800/50 cursor-pointer">
                        Show more
                    </div>
                </div>
            </div>

            {/* Who to follow */}
            <div className="bg-slate-900/50 rounded-2xl border border-slate-800 mb-4 overflow-hidden">
                <h2 className="text-xl font-bold px-4 py-3 text-slate-100">Who to follow</h2>
                <div>
                    {suggestions.map((user) => (
                        <div key={user.id} className="px-4 py-3 hover:bg-slate-800/50 transition cursor-pointer flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
                                    {user.username.substring(0,2).toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-100 hover:underline">{user.displayName}</div>
                                    <div className="text-slate-500 text-sm">@{user.username}</div>
                                </div>
                            </div>
                            <button className="bg-slate-100 hover:bg-slate-200 text-black font-bold text-sm px-4 py-1.5 rounded-full transition">
                                Follow
                            </button>
                        </div>
                    ))}
                    <div className="px-4 py-3 text-violet-400 text-sm hover:bg-slate-800/50 cursor-pointer">
                        Show more
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 text-xs text-slate-500 flex flex-wrap gap-x-3 gap-y-1 leading-4">
                <span className="hover:underline cursor-pointer">Terms of Service</span>
                <span className="hover:underline cursor-pointer">Privacy Policy</span>
                <span className="hover:underline cursor-pointer">Cookie Policy</span>
                <span className="hover:underline cursor-pointer">Accessibility</span>
                <span className="hover:underline cursor-pointer">Ads info</span>
                <span className="hover:underline cursor-pointer">More ...</span>
                <span>© 2025 Pulsar Corp.</span>
            </div>
        </div>
    );
};