import { motion } from "motion/react";
import { TrendingUp, Users, Target, MousePointer2, ArrowRight } from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const caseStudies = [
  {
    client: "Lumina Skincare",
    challenge: "Brand visibility was low in a saturated organic skincare market.",
    strategy: "Full Instagram overhaul focusing on cinematic reels and influencer seeding.",
    results: [
      { label: "Lead Increase", value: "400%", icon: TrendingUp },
      { label: "Reach", value: "5M+", icon: Users },
      { label: "CPC Reduction", value: "60%", icon: Target },
      { label: "ROAS", value: "10X", icon: MousePointer2 },
    ],
    image: "https://picsum.photos/seed/case1/1200/800"
  },
  {
    client: "TechNexus Launch",
    challenge: "New product launch with zero initial social presence.",
    strategy: "Aggressive Meta ads funnel combined with a 7-day hype countdown.",
    results: [
      { label: "Pre-Signups", value: "12k+", icon: Target },
      { label: "Engagement Rate", value: "18%", icon: TrendingUp },
      { label: "Cost Per Signup", value: "$0.45", icon: MousePointer2 },
      { label: "Press Mentions", value: "15+", icon: Users },
    ],
    image: "https://picsum.photos/seed/case2/1200/800"
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto space-y-8 text-center relative z-10">
           <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Success Stories</span>
           <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">Case <span className="text-gradient">Studies</span></h1>
           <p className="text-xl text-white/50 max-w-2xl mx-auto">Proven results for brands that trusted PIXA with their growth.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.client}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden glass relative group shrink-0">
               <img src={study.image} alt={study.client} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-12">
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{study.client}</h2>
                  <div className="max-w-2xl space-y-4">
                     <p className="text-white/80 text-xl font-medium">Challenge: <span className="font-normal text-white/50">{study.challenge}</span></p>
                     <p className="text-brand-primary text-xl font-bold italic">Strategy: <span className="font-normal text-white/50">{study.strategy}</span></p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {study.results.map((res, j) => (
                 <div key={j} className="glass p-8 rounded-3xl flex flex-col gap-4 group hover:bg-brand-primary/5 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                       <res.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-3xl md:text-4xl font-display font-bold text-gradient">{res.value}</h4>
                       <p className="text-sm font-bold uppercase tracking-widest text-white/30">{res.label}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="text-center pt-4">
               <button className="btn-secondary">View Detailed Breakdown <ArrowRight size={18} className="ml-2" /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
