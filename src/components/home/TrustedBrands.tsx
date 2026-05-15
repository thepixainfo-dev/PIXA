import { motion } from "motion/react";

const brands = [
  "Hemel Brews Restobrewery", "Namma Veedu", "Grain Barrel Microbrewery", "Pakwaan Grand", "A1 Nujoom Mandi House", "Devil's Cut Restobar", "JustBake", "S4 Food Court", "Baker's Super MArt", "Universal Pace 4T", "Star Trivitron HealthCare"
];

export function TrustedBrands() {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30">
          Trusted By Industry Leaders
        </p>
      </div>
      
      <div className="flex relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 sm:gap-20"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                <span className="font-display font-bold text-white/20 group-hover:text-brand-primary transition-colors">
                  {brand[0]}
                </span>
              </div>
              <span className="text-3xl md:text-4xl font-display font-bold text-white/10 group-hover:text-white/40 transition-colors uppercase italic tracking-tighter">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
