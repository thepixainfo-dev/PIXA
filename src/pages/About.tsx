import { motion } from "motion/react";
import { BackgroundLines } from "../components/BackgroundLines";

export default function About() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-bold tracking-[0.4em] uppercase text-sm block"
          >
            About PIXA
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter"
          >
            Creative Marketing <br /> <span className="text-gradient">Powered By Strategy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-3xl mx-auto"
          >
            We are a team of dreamers, creators, and data-geeks united by a single mission: to help modern brands scale in the ever-evolving digital landscape.
          </motion.p>
        </div>
        
        {/* Cinematic Backdrop */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-0" />
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[150px] -z-10" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-display font-bold">Our Story & Culture</h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Founded in 2020, PIXA was born out of a desire to bridge the gap between creative storytelling and hard analytics. We noticed that most agencies focus on one or the other, but few master both.
              </p>
              <p>
                Today, we help global and local brands navigate the complex digital waters, ensuring their message isn't just seen, but felt and acted upon.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-bold text-white">Our Mission</h3>
                <p className="text-sm text-white/40 leading-relaxed">To transform digital identities through bold creativity and data precision.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-bold text-white">Our Vision</h3>
                <p className="text-sm text-white/40 leading-relaxed">To become the gold standard for strategic digital scale-ups globally.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
               <img 
                 src="https://drive.google.com/thumbnail?id=1OTMDFznukX9e2jXgAFUvLWgnCMowP4AR&sz=w1200" 
                 alt="Our Story & Culture" 
                 className="w-full h-full object-cover rounded-[2rem]"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
