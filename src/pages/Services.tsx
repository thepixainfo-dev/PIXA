import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Instagram, Search, PlayCircle, Globe, Palette, 
  Video, Filter, BarChart, CheckCircle2 
} from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const allServices = [
  {
    title: "Social Media Marketing",
    id: "smm",
    icon: Instagram,
    description: "End-to-end management from content strategy to community building.",
    benefits: ["Increased Engagement", "Brand Loyalty", "Audience Growth"],
    details: "We build native content calendars that speak the language of each platform.",
    image: "1cPNDAdVYouivUY5HYZeopPT8oIPllZPe"
  },
  {
    title: "SEO Optimization",
    id: "seo",
    icon: Search,
    description: "Driving high-quality organic traffic through technical and content SEO.",
    benefits: ["Higher Rankings", "Long-term Traffic", "Brand Authority"],
    details: "Expert keyword research, backlink building, and technical site health checks.",
    image: "15hJpcVq-lkc5iPC_DqtgkkWBVROCfJds"
  },
  {
    title: "Google & Meta Ads",
    id: "ads",
    icon: PlayCircle,
    description: "Precision-targeted paid campaigns designed for conversion and ROI.",
    benefits: ["Instant Traffic", "Scalable Results", "Targeted Leads"],
    details: "We manage budgets and optimize creatives to ensure every rupee spent delivers value.",
    image: "18w-PrlZiQkq6GZuJLHwT4bma39lWUrM8"
  },
  {
    title: "Website Development",
    id: "web",
    icon: Globe,
    description: "High-performance websites built for modern digital commerce.",
    benefits: ["Fast Loading", "SEO Friendly", "Conversion Focused"],
    details: "From Figma to live React apps, we build immersive digital experiences.",
    image: "1TFXeLF-ej4g8Fa-NeFy4uI7826QZwj1X"
  },
  {
    title: "Branding",
    id: "branding",
    icon: Palette,
    description: "Visual identity systems that make brands unforgettable.",
    benefits: ["Unique Identity", "Professional Appeal", "Consistency"],
    details: "Logo design, typography, color palettes, and full brand guidelines.",
    image: "1M-mMJFogSoTDuiWqs1MKlwJ-J06PyQBy"
  },
  {
    title: "Video Production",
    id: "video",
    icon: Video,
    description: "Cinematic visual content that captures attention instantly.",
    benefits: ["Viral Potential", "Emotional Connection", "High Impact"],
    details: "Professional editing, motion graphics, and high-quality filming.",
    image: "1NS5F7t8dI8xO6Sbxe9HoaqQrCZebnQ1d"
  },
];

export default function Services() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-brand-primary p-2 bg-brand-primary/10 rounded-lg font-bold tracking-widest uppercase text-xs">Our Solutions</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            Full-Service <span className="text-gradient">Digital Success</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            We don't just offer services; we architect growth engines tailored to your unique business goals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        {allServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:items-center gap-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            <div className="lg:w-1/2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <service.icon size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">{service.title}</h2>
              <p className="text-xl text-white/60 leading-relaxed italic border-l-4 border-brand-primary pl-6">
                "{service.description}"
              </p>
              <div className="space-y-4">
                <p className="text-white/40 leading-relaxed">{service.details}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3 glass py-3 px-5 rounded-2xl border-white/5">
                      <CheckCircle2 size={18} className="text-brand-accent" />
                      <span className="font-medium text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            <div className="lg:w-1/2">
               <div className="aspect-video rounded-[3rem] overflow-hidden glass p-4 relative group">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <img 
                      src={`https://drive.google.com/thumbnail?id=${service.image}&sz=w1000`} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                       <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">Excellence in {service.title}</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="py-20 bg-brand-primary/10 border-y border-white/5 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-3xl font-display font-bold italic">Not sure which service is right for you?</h2>
           <Link to="/contact" className="btn-primary inline-block">Get A Free Audit & Recommendations</Link>
        </div>
      </section>
    </div>
  );
}
