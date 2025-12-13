import { User, Post, AuthResponse, TrendingTopic, FollowSuggestion } from '../types';

// Mock Data Stores simulating PostgreSQL Tables
const USERS_TABLE: User[] = [
  { id: 1, username: 'scale_master', displayName: 'System Architect', email: 'admin@pulsar.com', created_at: new Date().toISOString(), verified: true },
  { id: 2, username: 'python_dev', displayName: 'FastAPI Fanatic', email: 'fastapi@code.com', created_at: new Date().toISOString() },
  { id: 3, username: 'postgres_guru', displayName: 'DB Admin', email: 'sql@db.com', created_at: new Date().toISOString() },
  { id: 4, username: 'design_phi', displayName: 'Golden Ratio', email: 'art@phi.com', created_at: new Date().toISOString(), verified: true },
];

const POSTS_TABLE: Post[] = [
  { id: 101, user_id: 1, content: 'Just setup the initial schema with alembic. The database sharding strategy is looking solid for 10M+ users. #fastapi #postgres', created_at: new Date(Date.now() - 3600000).toISOString(), likes: 42, reposts: 12, replies: 5, views: 1205 },
  { id: 102, user_id: 4, content: 'Design is intelligence made visible. The new Pulsar UI uses the golden ratio for column width distribution. 1.618 is everywhere.', created_at: new Date(Date.now() - 7200000).toISOString(), likes: 89, reposts: 34, replies: 8, views: 3400 },
  { id: 103, user_id: 2, content: 'Dependency injection in FastAPI is so clean compared to Flask. It makes testing services effortless.', created_at: new Date(Date.now() - 14400000).toISOString(), likes: 23, reposts: 2, replies: 1, views: 800 },
  { id: 104, user_id: 3, content: 'Don’t forget VACUUM ANALYZE if you delete a lot of rows! Dead tuples will kill your query performance.', created_at: new Date(Date.now() - 28000000).toISOString(), likes: 156, reposts: 45, replies: 12, views: 12000 },
  { id: 105, user_id: 1, content: 'Optimizing the feed query. The composite index on (user_id, created_at DESC) is a lifesaver.', created_at: new Date(Date.now() - 86400000).toISOString(), likes: 55, reposts: 5, replies: 3, views: 2100 },
];

const TRENDING_TABLE: TrendingTopic[] = [
  { id: 1, category: 'Technology', topic: 'PostgreSQL 17', postsCount: '12.5K' },
  { id: 2, category: 'Trending in Tech', topic: 'Pulsar Social', postsCount: '85.2K' },
  { id: 3, category: 'Design', topic: 'Golden Ratio', postsCount: '4.1K' },
  { id: 4, category: 'Programming', topic: '#FastAPI', postsCount: '22K' },
  { id: 5, category: 'Entertainment', topic: 'Dune: Messiah', postsCount: '150K' },
];

const SUGGESTIONS_TABLE: FollowSuggestion[] = [
  { id: 3, username: 'postgres_guru', displayName: 'DB Admin', reason: 'Followed by scale_master' },
  { id: 4, username: 'design_phi', displayName: 'Golden Ratio', reason: 'Recommended for you' },
];

// Mapping follower_id -> followee_id[]
const FOLLOWS_TABLE: Record<number, number[]> = {
  1: [2, 3, 4], 
  2: [1],
};

class MockBackendService {
  private currentUser: User | null = null;

  async login(email: string): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = USERS_TABLE.find(u => u.email === email);
        if (user) {
          this.currentUser = user;
          resolve({
            access_token: 'pulsar_access_token_xyz',
            refresh_token: 'pulsar_refresh_token_abc',
            token_type: 'bearer',
            user: user
          });
        } else {
          reject(new Error('User not found'));
        }
      }, 500); 
    });
  }

  async getFeed(limit: number = 20, offset: number = 0): Promise<Post[]> {
    if (!this.currentUser) throw new Error("Unauthorized");
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock feed logic: get followed users + self
        const followedIds = FOLLOWS_TABLE[this.currentUser!.id] || [];
        const visibleUserIds = [...followedIds, this.currentUser!.id];

        const feedPosts = POSTS_TABLE
          .filter(p => visibleUserIds.includes(p.user_id))
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(offset, offset + limit)
          .map(post => ({
            ...post,
            user: USERS_TABLE.find(u => u.id === post.user_id)
          }));

        resolve(feedPosts);
      }, 300);
    });
  }

  async createPost(content: string): Promise<Post> {
    if (!this.currentUser) throw new Error("Unauthorized");

    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost: Post = {
          id: Math.floor(Math.random() * 100000),
          user_id: this.currentUser!.id,
          content,
          created_at: new Date().toISOString(),
          likes: 0,
          reposts: 0,
          replies: 0,
          views: 0,
          user: this.currentUser!
        };
        POSTS_TABLE.unshift(newPost);
        resolve(newPost);
      }, 200);
    });
  }

  async getTrending(): Promise<TrendingTopic[]> {
    return Promise.resolve(TRENDING_TABLE);
  }

  async getSuggestions(): Promise<FollowSuggestion[]> {
    return Promise.resolve(SUGGESTIONS_TABLE);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

export const mockBackend = new MockBackendService();