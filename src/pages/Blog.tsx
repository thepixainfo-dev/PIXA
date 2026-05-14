import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const categories = ["All", "SEO", "Social Media", "Branding", "AI Marketing", "Google Ads"];

const posts = [
  { id: 1, title: "The Future of AI in Modern Marketing", excerpt: "How artificial intelligence is reshaping the way brands connect with audiences in 2024.", image: "https://picsum.photos/seed/blog1/800/600", date: "May 10, 2024", author: "Alex Rivera", category: "AI Marketing" },
  { id: 2, title: "Maximizing Instagram Growth Through Reels", excerpt: "Practical strategies to boost your organic reach using vertical video content.", image: "https://picsum.photos/seed/blog2/800/600", date: "May 08, 2024", author: "Sarah Smith", category: "Social Media" },
  { id: 3, title: "10 SEO Trends You Can't Ignore", excerpt: "Stay ahead of the curve with these critical search engine optimization tactics.", image: "https://picsum.photos/seed/blog3/800/600", date: "May 05, 2024", author: "James Wilson", category: "SEO" },
  { id: 4, title: "Psychology of Color in Branding", excerpt: "Understand how color choices influence consumer perception and brand identity.", image: "https://picsum.photos/seed/blog4/800/600", date: "Apr 28, 2024", author: "Megha Gupta", category: "Branding" },
  { id: 5, title: "Google Ads vs Meta Ads: Which to Choose?", excerpt: "A comprehensive guide to picking the right paid platform for your specific goals.", image: "https://picsum.photos/seed/blog5/800/600", date: "Apr 22, 2024", author: "Ankit Singh", category: "Google Ads" },
  { id: 6, title: "Leveraging Data for Campaign Scale", excerpt: "How to use analytics to identify winning patterns and accelerate your growth.", image: "https://picsum.photos/seed/blog6/800/600", date: "Apr 15, 2024", author: "Priya Varma", category: "AI Marketing" },
];

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(p => 
    (activeCat === "All" || p.category === activeCat) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">
           <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">PIXA Blog</span>
           <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">Insights & <span className="text-gradient">Ideas</span></h1>
           <p className="text-xl text-white/50 max-w-2xl mx-auto">Exploring the intersection of creativity, data, and digital growth.</p>
           
           <div className="w-full max-w-2xl relative mt-12">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-brand-primary transition-all text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30" />
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-wrap gap-2 mb-16 justify-center">
          {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCat(cat)}
               className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                 activeCat === cat 
                   ? "bg-brand-primary text-white" 
                   : "bg-white/5 text-white/40 hover:bg-white/10"
               }`}
             >
               {cat}
             </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-white">{post.category}</span>
                   </div>
                </div>
                <div className="space-y-4 flex flex-col flex-grow">
                   <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30 font-mono">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                   </div>
                   <h3 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors line-clamp-2">{post.title}</h3>
                   <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                   <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
