import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Instagram, Search, PlayCircle, Globe, Palette, 
  Video, Filter, PenTool, Layout, BarChart 
} from "lucide-react";
import { BackgroundLines } from "../BackgroundLines";

const services = [
  {
    title: "Social Media Marketing",
    description: "Build a community and grow your brand presence on Instagram, Meta, and LinkedIn.",
    icon: Instagram,
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on search results and drive organic traffic to your digital platforms.",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Google & Meta Ads",
    description: "Scale faster with high-converting paid campaigns that deliver measurable ROI.",
    icon: PlayCircle,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Website Development",
    description: "Premium, responsive, and performance-optimized websites tailored for conversion.",
    icon: Globe,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Branding & Identity",
    description: "Creating distinctive visual identities and brand stories that stand out.",
    icon: Palette,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Video Production",
    description: "High-quality cinematic reels, ads, and brand films for modern digital consumption.",
    icon: Video,
    color: "from-red-600 to-pink-600"
  },
  {
    title: "Influencer Marketing",
    description: "Connect with authentic voices that resonate with your target audience.",
    icon: Filter,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "AI Marketing Solutions",
    description: "Leverage cutting-edge AI tools to optimize content and campaign efficiency.",
    icon: BarChart,
    color: "from-cyan-400 to-blue-600"
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <BackgroundLines />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <div className="inline-block px-3 py-1 border border-brand-primary/30 bg-brand-primary/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Strategic Solutions for <br />
              <span className="text-white/40">Exponential Growth</span>
            </h2>
          </div>
          <Link to="/services" className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group hover:gap-3 transition-all border border-brand-primary/20 px-6 py-3 rounded-full hover:bg-brand-primary/10">
            View All Services <Globe size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass p-8 rounded-[2rem] hover:border-brand-primary/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-8 flex items-center justify-center text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                <service.icon size={26} />
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Hover Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
