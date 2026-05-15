import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BackgroundLines } from "../BackgroundLines";

const stats = [
  { label: "Clients Served", value: "100+" },
  { label: "Successful Campaigns", value: "100+" },
  { label: "Reach Generated", value: "15M+" },
  { label: "Industries Served", value: "15+" },
];

export function AboutPreview() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <BackgroundLines />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="https://drive.google.com/thumbnail?id=1j54yLllNR_PS-qD8QfVc0PeLFQNEkfe7&sz=w1200" 
                  alt="Agency Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                  <p className="text-sm font-medium italic">"We don't just market; we build legacies through strategic creativity."</p>
                </div>
              </div>
            </div>
            
            {/* Decimals/floating bg elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Creative Marketing <br /> Powered By Strategy
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                PIXA is a creative digital marketing agency focused on helping brands grow through strategy, content, branding, advertising, and performance marketing. We combine data with creativity to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-3xl font-display font-bold text-brand-primary">{stat.value}</h3>
                  <p className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {["ROI Focused Strategies", "Dedicated Creative Team", "Data-Driven Insights"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-brand-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/about" className="btn-secondary group flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
