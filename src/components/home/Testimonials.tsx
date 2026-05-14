import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechNexus",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "PIXA transformed our digital presence. Our lead conversion increased by 300% in just three months. Their strategic approach is unmatched.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Marketing Director at Elevate",
    image: "https://i.pravatar.cc/150?u=david",
    content: "The creative team at PIXA is incredible. They understood our vision perfectly and delivered content that truly resonated with our audience.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Founder of Vibe.co",
    image: "https://i.pravatar.cc/150?u=elena",
    content: "Working with PIXA was a game-changer for our startup. Their AI-driven marketing solutions saved us time and maximized our ad spend.",
    rating: 5
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                What Our Clients <br /> <span className="text-gradient">Say About Us</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">
                We believe in building long-term partnerships with our clients based on trust and results.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-brand-primary border-brand-primary/50"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 text-brand-primary/10">
              <Quote size={180} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) next();
                  else if (info.offset.x > 100) prev();
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass p-10 md:p-16 rounded-[3rem] relative z-10 cursor-grab active:cursor-grabbing"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 italic">
                  "{testimonials[index].content}"
                </p>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/50">
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{testimonials[index].name}</h4>
                    <p className="text-white/40 text-sm uppercase tracking-widest">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
