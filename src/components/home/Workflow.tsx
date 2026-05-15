import { motion } from "motion/react";
import { Search, Lightbulb, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../BackgroundLines";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your brand architecture and market landscape.",
    icon: Search,
    color: "from-brand-secondary to-brand-primary",
    shadow: "shadow-brand-secondary/20"
  },
  {
    number: "02",
    title: "Strategy",
    description: "Architecting a unique growth blueprint tailored for scale.",
    icon: Lightbulb,
    color: "from-brand-primary to-brand-accent",
    shadow: "shadow-brand-primary/20"
  },
  {
    number: "03",
    title: "Creation",
    description: "Crafting exceptional digital assets that command attention.",
    icon: PenTool,
    color: "from-brand-accent to-brand-highlight",
    shadow: "shadow-brand-accent/20"
  },
  {
    number: "04",
    title: "Execution",
    description: "Precision launch across synchronized marketing channels.",
    icon: Rocket,
    color: "from-brand-highlight to-brand-secondary",
    shadow: "shadow-brand-highlight/20"
  },
  {
    number: "05",
    title: "Optimization",
    description: "Data-led refinement to ensure perpetual peak performance.",
    icon: BarChart3,
    color: "from-brand-secondary via-brand-primary to-brand-accent",
    shadow: "shadow-brand-secondary/20"
  },
];

export function Workflow() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      <BackgroundLines />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-24 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest"
        >
          The Path to Excellence
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-display font-bold leading-tight"
        >
          Engineering Your <span className="text-gradient">Success</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Our systematic approach combines creative intuition with data-driven strategy to deliver exceptional results at scale.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 50,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="relative group/card"
            >
              {/* Trending Glow Effect */}
              <div className={`absolute -inset-[2px] bg-gradient-to-r ${step.color} rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 blur-sm transition-all duration-500 group-hover/card:blur-md`} />
              <div className={`absolute -inset-[20px] bg-gradient-to-r ${step.color} rounded-[4rem] opacity-0 group-hover/card:opacity-10 blur-[40px] transition-all duration-700`} />

              {/* Card Content */}
              <div className="relative h-full bg-black/40 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-3xl overflow-hidden group/inner transition-colors duration-500 hover:bg-black/60">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -mr-8 -mt-8 rounded-full blur-2xl" />
                
                {/* Number */}
                <div className="absolute top-6 right-8 text-5xl font-display font-black text-white/[0.03] group-hover/card:text-white/5 transition-colors duration-500">
                  {step.number}
                </div>

                <div className="space-y-8 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover/card:text-brand-primary group-hover/card:border-brand-primary group-hover/card:scale-110 transition-all duration-500 ${step.shadow}`}>
                    <step.icon size={32} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-2 group-hover/card:translate-y-0">Phase {step.number}</p>
                    <h3 className="text-2xl md:text-3xl font-display font-bold group-hover/card:text-white transition-colors">{step.title}</h3>
                  </div>

                  <p className="text-white/40 text-lg leading-relaxed group-hover/card:text-white/70 transition-colors duration-500">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                     <div className="h-[1px] flex-1 bg-white/10 group-hover/card:bg-gradient-to-r group-hover/card:from-brand-primary/50 group-hover/card:to-transparent transition-all duration-500" />
                     <motion.div
                       whileHover={{ x: 5 }}
                       className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:border-brand-primary transition-colors"
                     >
                        <ArrowRight size={18} className="text-white/20 group-hover/card:text-brand-primary transition-colors" />
                     </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              zIndex: 50,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="group/card relative lg:col-span-1 md:col-span-2 lg:row-span-1"
          >
            <div className="absolute -inset-[2px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-[2.5rem] opacity-20 group-hover/card:opacity-100 blur-sm transition-all duration-500" />
            <div className="relative h-full bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-transparent border border-brand-primary/20 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6 backdrop-blur-xl overflow-hidden">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(114,73,232,0.5)] group-hover/card:scale-110 transition-transform">
                <Rocket className="text-white animate-bounce" size={40} />
              </div>
              <h3 className="text-3xl font-display font-bold">Ready for the Jump?</h3>
              <p className="text-white/60 text-lg">Let's scale your project with precision.</p>
              <Link 
                to="/contact"
                className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-[0_10px_30px_rgba(114,73,232,0.3)] uppercase tracking-wider text-sm border border-white/10 hover:border-white/20 flex items-center justify-center"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

