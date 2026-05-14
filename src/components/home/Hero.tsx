import { motion } from "motion/react";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../BackgroundLines";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      <BackgroundLines />
      {/* Immersive Background Meshes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background-deep">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 border border-brand-primary/30 bg-brand-primary/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase">
            Creative Digital Agency
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Grow Your Brand <br />
            With <span className="text-brand-primary">Creative</span> <br />
            Marketing
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
            Performance-driven marketing solutions for businesses that want visibility, leads, and growth. We turn strategy into cinematic results.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-colors">
              View Portfolio
            </Link>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative group lg:scale-110"
        >
          {/* Animated Background Waves */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] bg-brand-primary/10 rounded-[40%] blur-3xl opacity-50"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] bg-brand-secondary/10 rounded-[35%] blur-3xl opacity-30"
            />
            
          </div>

          <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand-primary/20 rounded-full blur-[80px]" />
          
          {/* Animated Image Container */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_32px_64px_-16px_rgba(139,92,246,0.3)] backdrop-blur-3xl bg-white/5 p-2">
              <img 
                src="https://drive.google.com/thumbnail?id=1UjbxP6Wp7sWMGPmuOy0Nqrq58tHvq8Sx&sz=w1200" 
                alt="Marketing Performance Dashboard" 
                className="w-full h-full rounded-[1.8rem] opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep/80 via-transparent to-transparent opacity-60"></div>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]"></div>
            </div>

            {/* Extra Floating Data 1: Engagement Rate */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-10 -right-6 lg:-right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-20 cursor-default hover:scale-110 transition-transform group-hover:rotate-6"
            >
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Engagement</div>
              <div className="text-2xl font-display font-bold text-brand-primary">+85.4%</div>
            </motion.div>

            {/* Extra Floating Data 2: ROI */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-10 lg:-left-20 bg-brand-primary/20 backdrop-blur-xl border border-brand-primary/30 p-4 rounded-2xl shadow-xl z-20 cursor-default hover:scale-110 transition-transform group-hover:-rotate-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap size={12} className="text-brand-primary" />
                <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold">ROI</div>
              </div>
              <div className="text-2xl font-display font-bold">12.5x</div>
            </motion.div>

            {/* Extra Floating Data 3: Lead Gen (Restyled) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-6 right-10 bg-gradient-to-br from-brand-secondary to-brand-primary p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-white/20 hover:rotate-2 transition-transform scale-110"
            >
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Play size={20} className="fill-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-tight text-white/80">Active Leads</div>
                <div className="text-lg font-display font-bold">1,248 Verified</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
