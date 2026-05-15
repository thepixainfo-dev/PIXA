import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Branding", "Social Media", "Ads", "Websites"];

const projects = [
  { title: "Eco-Luxe Branding", category: "Branding", image: "https://picsum.photos/seed/p1/800/600" },
  { title: "TechNexus Campaign", category: "Social Media", image: "https://picsum.photos/seed/p2/800/600" },
  { title: "Quantum Ads", category: "Ads", image: "https://picsum.photos/seed/p3/800/600" },
  { title: "Vibe.co Website", category: "Websites", image: "https://picsum.photos/seed/p4/800/600" },
  { title: "Zenith Identity", category: "Branding", image: "https://picsum.photos/seed/p5/800/600" },
  { title: "Aura Social Growth", category: "Social Media", image: "https://picsum.photos/seed/p6/800/600" },
];

export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Crafting <span className="text-gradient">Digital Excellence</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat 
                    ? "bg-brand-primary text-white" 
                    : "bg-white/5 text-white/50 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-display font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      {project.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all delay-300 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
