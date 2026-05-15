import { Check, X, Shield, Globe, Zap, Headset } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../components/BackgroundLines";

const plans = [
  {
    name: "Starter",
    description: "Perfect for early-stage startups and small businesses.",
    features: [
      "12 Social Media Posts/mo",
      "Basic SEO Setup",
      "Meta Ads Management (Budget < 20k)",
      "Monthly Reporting",
      "Standard Support",
    ],
    notIncluded: ["Content Strategy", "High-End Video Editing", "Influencer Outreach"],
    highlight: false,
  },
  {
    name: "Growth",
    description: "Designed for scaling brands requiring multi-channel presence.",
    features: [
      "24 Social Media Posts/mo",
      "Full On-Page/Off-Page SEO",
      "Google & Meta Ads Management",
      "Bi-Weekly Reporting",
      "Dedicated Strategy Partner",
      "4 Reels/Video Edits",
    ],
    notIncluded: ["Influencer Marketing", "E-commerce Dev"],
    highlight: true,
  },
  {
    name: "Premium",
    description: "Enterprise solutions for full-scale digital dominance.",
    features: [
      "Daily Social Content",
      "Full Digital Suite",
      "Influencer & PR Management",
      "Weekly Strategic Reviews",
      "24/7 Priority Support",
      "Unlimited Cinematic Content",
      "Custom Web Development",
    ],
    notIncluded: [],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
           <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Pricing Plans</span>
           <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">Choose Your <span className="text-gradient">Scale</span></h1>
           <p className="text-xl text-white/50 max-w-2xl mx-auto">Transparent pricing designed to deliver ROI at every stage of your journey.</p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 md:p-12 rounded-[3rem] glass border-2 transition-all duration-500 hover:scale-[1.02] ${
                plan.highlight ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_80px_rgba(139,92,246,0.15)]" : "border-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-12 -translate-y-1/2 px-6 py-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-6 mb-10">
                <h3 className="text-2xl font-display font-bold">{plan.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4">
                 {plan.features.map((feature, j) => (
                   <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-white/80 font-medium">{feature}</span>
                   </div>
                 ))}
                 {plan.notIncluded.map((feature, j) => (
                   <div key={j} className="flex items-center gap-3 opacity-30">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
                         <X size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm line-through">{feature}</span>
                   </div>
                 ))}
              </div>

              <div className="pt-10">
                <Link 
                  to="/contact"
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                    plan.highlight ? "bg-white text-black hover:shadow-xl" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
           <div className="flex items-center gap-3 font-display font-bold text-xl"><Shield /> Secured</div>
           <div className="flex items-center gap-3 font-display font-bold text-xl"><Globe /> Global Scale</div>
           <div className="flex items-center gap-3 font-display font-bold text-xl"><Zap /> Fast Growth</div>
           <div className="flex items-center gap-3 font-display font-bold text-xl"><Headset /> Priority Support</div>
        </div>
      </section>
    </div>
  );
}
