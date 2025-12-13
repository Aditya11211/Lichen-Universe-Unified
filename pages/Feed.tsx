import React, { useEffect, useState } from 'react';
import { mockBackend } from '../services/mockDb';
import { Post } from '../types';
import { MessageSquare, Heart, Repeat, BarChart2, Share, Image, Smile, Calendar, MapPin, Loader2, BadgeCheck } from 'lucide-react';

export const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');

  const fetchFeed = async () => {
    try {
      const data = await mockBackend.getFeed();
      setPosts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;
    
    setIsPosting(true);
    await mockBackend.createPost(newPostContent);
    setNewPostContent('');
    setIsPosting(false);
    fetchFeed();
  };

  const TabButton = ({ id, label }: { id: 'foryou' | 'following', label: string }) => (
      <div 
        onClick={() => setActiveTab(id)}
        className="flex-1 hover:bg-slate-900/50 cursor-pointer transition flex justify-center h-[53px] relative"
      >
          <div className="flex items-center h-full">
            <span className={`font-medium ${activeTab === id ? 'text-slate-100 font-bold' : 'text-slate-500'}`}>
                {label}
            </span>
          </div>
          {activeTab === id && (
              <div className="absolute bottom-0 w-14 h-1 bg-violet-500 rounded-full"></div>
          )}
      </div>
  );

  return (
    <div className="w-full max-w-[600px] border-r border-slate-800 min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-20 border-b border-slate-800">
          <div className="flex w-full">
              <TabButton id="foryou" label="For you" />
              <TabButton id="following" label="Following" />
          </div>
      </div>

      {/* Compose Box */}
      <div className="p-4 border-b border-slate-800 hidden md:block">
        <form onSubmit={handleCreatePost} className="flex gap-4">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
                    S
                </div>
            </div>
            <div className="flex-1">
                 <textarea
                    className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-xl resize-none focus:outline-none p-2 min-h-[50px]"
                    placeholder="What is happening?!"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={2}
                />
                <div className="flex justify-between items-center mt-2 border-t border-slate-800 pt-3">
                    <div className="flex gap-1 text-violet-400">
                        <button type="button" className="p-2 hover:bg-violet-500/10 rounded-full transition"><Image className="w-5 h-5" /></button>
                        <button type="button" className="p-2 hover:bg-violet-500/10 rounded-full transition"><Smile className="w-5 h-5" /></button>
                        <button type="button" className="p-2 hover:bg-violet-500/10 rounded-full transition"><Calendar className="w-5 h-5" /></button>
                        <button type="button" className="p-2 hover:bg-violet-500/10 rounded-full transition"><MapPin className="w-5 h-5" /></button>
                    </div>
                    <button 
                        type="submit" 
                        disabled={!newPostContent.trim() || isPosting}
                        className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2"
                    >
                        {isPosting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Pulse'}
                    </button>
                </div>
            </div>
        </form>
      </div>

      {/* Feed Stream */}
      {loading ? (
        <div className="flex justify-center p-12">
            <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <article key={post.id} className="hover:bg-slate-900/40 transition-colors p-4 border-b border-slate-800 cursor-pointer">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
                        {post.user?.username.charAt(0).toUpperCase()}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-slate-100 hover:underline">{post.user?.displayName}</span>
                            {post.user?.verified && <BadgeCheck className="w-4 h-4 text-violet-500 fill-black" />}
                            <span className="text-slate-500 text-sm ml-1">@{post.user?.username}</span>
                            <span className="text-slate-600 text-sm">·</span>
                            <span className="text-slate-500 text-sm hover:underline">{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <p className="mt-1 text-slate-200 whitespace-pre-wrap leading-normal text-[15px]">
                        {post.content}
                    </p>
                    
                    {/* Action Bar - X Style */}
                    <div className="flex justify-between mt-3 text-slate-500 max-w-[425px]">
                        <button className="flex items-center gap-1 group">
                            <div className="p-2 rounded-full group-hover:bg-blue-500/10 group-hover:text-blue-400 transition">
                                <MessageSquare className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs group-hover:text-blue-400 transition">{post.replies > 0 ? post.replies : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 group">
                            <div className="p-2 rounded-full group-hover:bg-green-500/10 group-hover:text-green-400 transition">
                                <Repeat className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs group-hover:text-green-400 transition">{post.reposts > 0 ? post.reposts : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 group">
                            <div className="p-2 rounded-full group-hover:bg-pink-500/10 group-hover:text-pink-400 transition">
                                <Heart className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs group-hover:text-pink-400 transition">{post.likes > 0 ? post.likes : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 group">
                            <div className="p-2 rounded-full group-hover:bg-violet-500/10 group-hover:text-violet-400 transition">
                                <BarChart2 className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs group-hover:text-violet-400 transition">{post.views > 0 ? (post.views > 1000 ? (post.views/1000).toFixed(1) + 'K' : post.views) : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 group">
                            <div className="p-2 rounded-full group-hover:bg-violet-500/10 group-hover:text-violet-400 transition">
                                <Share className="w-4.5 h-4.5" />
                            </div>
                        </button>
                    </div>
                </div>
              </div>
            </article>
          ))}
          
           <div className="h-40 flex items-center justify-center">
             <div className="w-8 h-8 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};