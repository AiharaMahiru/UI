import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of UI Design',
    excerpt: 'Exploring the latest trends in user interface design and what to expect in the coming years.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    category: 'Design'
  },
  {
    id: '2',
    title: 'Mastering React Hooks',
    excerpt: 'A comprehensive guide to understanding and using React Hooks effectively in your applications.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 22, 2023',
    readTime: '8 min read',
    category: 'Development'
  },
  {
    id: '3',
    title: 'Building Scalable Systems',
    excerpt: 'Key principles and patterns for designing software systems that can handle growth.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 20, 2023',
    readTime: '12 min read',
    category: 'Architecture'
  },
  {
    id: '4',
    title: 'The Power of Typography',
    excerpt: 'How to use type to create hierarchy, emotion, and clarity in your designs.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 18, 2023',
    readTime: '6 min read',
    category: 'Design'
  },
  {
    id: '5',
    title: 'Optimizing Web Performance',
    excerpt: 'Techniques and tools to make your websites load faster and perform better.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 15, 2023',
    readTime: '10 min read',
    category: 'Performance'
  },
  {
    id: '6',
    title: 'Introduction to GraphQL',
    excerpt: 'Why GraphQL is becoming a popular alternative to REST APIs.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 12, 2023',
    readTime: '7 min read',
    category: 'Development'
  },
];

export function Blog() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Blog</h2>
          <p className="text-slate-500 mt-1">Latest articles and insights from the team.</p>
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="break-inside-avoid bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 mb-6"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-indigo-600 shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight hover:text-indigo-600 transition-colors cursor-pointer">
                {post.title}
              </h3>

              <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group">
                Read Article
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
