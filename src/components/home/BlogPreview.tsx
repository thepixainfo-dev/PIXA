import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Future of AI in Modern Marketing",
    excerpt: "How artificial intelligence is reshaping the way brands connect with audiences in 2024.",
    image: "https://picsum.photos/seed/blog1/800/600",
    date: "May 10, 2024",
    author: "Alex Rivera",
    category: "AI Marketing"
  },
  {
    id: 2,
    title: "Maximizing Instagram Growth Through Reels",
    excerpt: "Practical strategies to boost your organic reach using vertical video content.",
    image: "https://picsum.photos/seed/blog2/800/600",
    date: "May 08, 2024",
    author: "Sarah Smith",
    category: "Social Media"
  },
  {
    id: 3,
    title: "10 SEO Trends You Can't Ignore",
    excerpt: "Stay ahead of the curve with these critical search engine optimization tactics.",
    image: "https://picsum.photos/seed/blog3/800/600",
    date: "May 05, 2024",
    author: "James Wilson",
    category: "SEO"
  }
];

export function BlogPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Latest Insights</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Thought Leadership <br /> From Our <span className="text-gradient">Experts</span>
            </h2>
          </div>
          <Link to="/blog" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Browse All Articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-widest text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-white/40 font-medium font-mono">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all pt-2">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
