import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageSquare } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { BackgroundLines } from "../components/BackgroundLines";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "Social Media",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Extract form data from the event target
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      business: formData.get("business"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#7249e8", "#2caefd", "#ef3b95", "#fdc02c"]
      });
    } catch (error: any) {
      console.error("Form Error:", error);
      alert(error.message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
           <div className="space-y-12">
              <div className="space-y-6">
                 <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Contact Us</span>
                 <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">Let's Build <br /> <span className="text-gradient">Something Big</span></h1>
                 <p className="text-xl text-white/50 max-w-lg leading-relaxed">
                   Have a project in mind? Or just want to say hi? We're always open to discussing new ideas and growth strategies.
                 </p>
              </div>

              <div className="space-y-8 font-medium">
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">Email Us</p>
                       <a href="mailto:thepixa.info@gmail.com" className="text-xl hover:text-brand-primary transition-colors">thepixa.info@gmail.com</a>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">Call Us</p>
                       <a href="tel:+918088961914" className="text-xl hover:text-brand-primary transition-colors">+91 8088961914</a>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">Our Office</p>
                       <p className="text-xl">HSR Layout, Bangalore, India</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8 flex gap-6">
                 {[
                   { Icon: Instagram, href: "https://www.instagram.com/thepixa_official/" },
                   { Icon: Facebook, href: "https://www.facebook.com/thepixa" }
                 ].map((social, i) => (
                   <a 
                     key={i} 
                     href={social.href} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                   >
                      <social.Icon size={20} className="text-white/70" />
                   </a>
                 ))}
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass p-8 md:p-12 rounded-[3.5rem] relative"
           >
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                   <div className="w-24 h-24 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Send size={40} className="animate-bounce" />
                   </div>
                   <div className="space-y-2">
                      <h2 className="text-4xl font-display font-bold italic">Message Sent!</h2>
                      <p className="text-white/50 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                   </div>
                   <button onClick={() => setIsSuccess(false)} className="btn-secondary">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Phone</label>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all"
                          placeholder="+91..."
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/30">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all"
                        placeholder="john@business.com"
                      />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Business Name</label>
                        <input 
                          name="business"
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Service Needed</label>
                        <select name="service" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all appearance-none cursor-pointer">
                           <option>Social Media</option>
                           <option>Ads Management</option>
                           <option>SEO Services</option>
                           <option>Web Development</option>
                           <option>Full Scale Branding</option>
                        </select>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/30">Your Message</label>
                      <textarea 
                        required
                        name="message"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-all resize-none"
                        placeholder="Tell us about your goals..."
                      />
                   </div>
                   <button 
                     disabled={isSubmitting}
                     className="w-full btn-primary py-5 text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50"
                   >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={20} />}
                   </button>
                </form>
              )}
           </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 pb-32">
         <div className="max-w-7xl mx-auto h-[400px] rounded-[3.5rem] overflow-hidden glass relative">
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
               <div className="text-center space-y-4">
                  <MapPin size={48} className="text-brand-primary mx-auto animate-bounce" />
                  <p className="text-white/40 font-display font-medium text-xl">Bangalore HQ - Interactive Map Loading...</p>
               </div>
            </div>
            {/* Real implementation would use Google Maps JS SDK */}
         </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918088961914" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 z-[100]"
      >
        <MessageSquare size={32} className="text-white fill-white" />
      </a>
    </div>
  );
}
