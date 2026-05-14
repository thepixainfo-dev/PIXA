import { motion } from "motion/react";
import { 
  Calendar, Laptop, Gift, PenTool, Printer, 
  ArrowRight, CheckCircle2, Star, Target, Users, ExternalLink
} from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const services = [
  {
    title: "Event Management",
    icon: Calendar,
    description: "End-to-End Event Planning & Execution for corporate and social gatherings.",
    items: [
      "Corporate events, conferences, product launches",
      "Internal employee events and celebrations",
      "Social and personal event management",
      "Complete vendor, logistics, and execution management"
    ]
  },
  {
    title: "IT Systems Sales & Rental",
    icon: Laptop,
    description: "Flexible IT Infrastructure Solutions for modern business needs.",
    items: [
      "Sales and rental of laptops, desktops, and accessories",
      "Short-term and long-term rental models",
      "Office setups, training programs, and event IT requirements"
    ]
  },
  {
    title: "Customized Corporate Gifting",
    icon: Gift,
    description: "Strategic Corporate Gifting Solutions for brand recall and engagement.",
    items: [
      "Branded corporate gifts",
      "Employee onboarding and joining kits",
      "Festival and milestone gifting",
      "Client and partner appreciation gifts"
    ]
  },
  {
    title: "Office Stationery & Consumables",
    icon: PenTool,
    description: "Reliable Office Supply Management to keep your operations running smoothly.",
    items: [
      "Complete office stationery and consumables",
      "Regular and bulk supply management",
      "Customized procurement based on usage patterns"
    ]
  },
  {
    title: "Print Media & Branding",
    icon: Printer,
    description: "Corporate Print & Branding Solutions for consistent brand representation.",
    items: [
      "Corporate branding materials",
      "Marketing and promotional print collateral",
      "High-quality printing with consistent standards"
    ]
  }
];

export default function KismatKonnect() {
  return (
    <div className="pt-20 overflow-hidden min-h-screen">
      <BackgroundLines />
      
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-4"
          >
            <div className="w-32 h-32 rounded-full glass flex items-center justify-center p-4">
               {/* Placeholder for Kismat Konnect Logo */}
               <div className="text-brand-primary text-4xl font-display font-bold">KK</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full glass border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Official Partner Association
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter"
          >
            Kismat <span className="text-gradient">Konnect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Your Trusted Partner for Seamless Corporate Operations. One Partner, Multiple Solutions, Seamless Execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-8"
          >
            <a href="https://kismatkonnect.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit Official Site <ArrowRight className="ml-2" size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About & Mission/Vision */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">Who We Are</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Bengaluru-based integrated services firm established in 2025. Built to function as an extension of clients operations team, focusing on execution excellence, reliability, and long-term partnerships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass p-6 rounded-2xl border border-white/5">
                <Target className="text-brand-primary mb-4" size={24} />
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-white/40">To become a trusted and preferred corporate services partner, known for quality and reliability.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5">
                <Star className="text-brand-primary mb-4" size={24} />
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-white/40">To deliver integrated, cost effective, and professionally managed corporate services that improve focus.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass rounded-[3rem] p-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate Strategy" 
                  className="w-full h-full object-cover rounded-[2rem]"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our Services</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Comprehensive solutions designed for your operational needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/40 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-white/60">
                      <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Who We Serve */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Why Choose Kismat Konnect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Single-window service partner",
                  "One point of accountability",
                  "Reduced vendor management overhead",
                  "Scalable and flexible service models",
                  "Cost and time optimization",
                  "Focus on long-term partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    <span className="text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass rounded-[3rem] p-12 border border-white/5 space-y-8">
            <h2 className="text-3xl font-display font-bold">Who We Serve</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Startups & Growing Businesses",
                "Small & Medium Enterprises (SMEs)",
                "Corporate Offices",
                "Educational Institutions",
                "Event-driven Organizations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 group hover:border-brand-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Icon/CTA */}
      <motion.a
        href="https://kismatkonnect.in"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/30 flex items-center justify-center text-white"
        title="Visit Kismat Konnect"
      >
        <ExternalLink size={24} />
      </motion.a>

      {/* Footer Contact Info */}
      <section className="py-20 px-6 bg-brand-primary/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-4xl font-display font-bold italic">Ready to transform your operations?</h2>
           <div className="flex flex-wrap justify-center gap-8 text-white/60">
             <div className="flex items-center gap-2">
               <Users className="text-brand-primary" size={20} />
               <span>Bengaluru, India</span>
             </div>
             <div className="flex items-center gap-2">
               <ArrowRight className="text-brand-primary" size={20} />
               <span>91-8147312352</span>
             </div>
           </div>
           <a 
            href="mailto:kismatkonnectgroup@gmail.com" 
            className="btn-primary inline-flex"
           >
            Get In Touch
           </a>
        </div>
      </section>
    </div>
  );
}
