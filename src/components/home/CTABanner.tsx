import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10"
        >
          {/* Bg Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
          
          <div className="relative z-10 space-y-8">
            <motion.div 
               animate={{ rotate: [0, 10, -10, 0] }}
               transition={{ repeat: Infinity, duration: 5 }}
               className="w-16 h-16 rounded-2xl glass mx-auto flex items-center justify-center text-white"
            >
              <Sparkles size={32} />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter leading-[0.95] max-w-4xl mx-auto">
              Ready To Scale <br /> Your Brand?
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Join 100+ growth-focused brands and build your strategic digital roadmap today.
            </p>
            
            <div className="pt-8">
              <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-black uppercase text-sm tracking-tighter rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95 group">
                Book Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="pt-12 flex flex-wrap justify-center gap-8 text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                 Free Consultation
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                 Custom Strategy
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                 ROI Focused
              </div>
            </div>
          </div>

          {/* Animated Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
}
