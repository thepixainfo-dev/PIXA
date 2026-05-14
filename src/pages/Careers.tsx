import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, UserPlus, Heart, Zap, Coffee } from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const positions = [
  { id: 1, title: "Social Media Manager", type: "Full-time", location: "Bangalore / Remote", team: "Creative" },
  { id: 2, title: "Performance Marketing Lead", type: "Full-time", location: "Bangalore", team: "Paid Ads" },
  { id: 3, title: "React Developer", type: "Freelance", location: "Remote", team: "Web Dev" },
  { id: 4, title: "Graphic Design Intern", type: "Internship", location: "Bangalore / Remote", team: "Design" },
  { id: 5, title: "SEO Content Specialist", type: "Full-time", location: "Remote", team: "SEO" },
];

export default function Careers() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center relative z-10">
           <div className="md:w-1/2 space-y-8">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Join The Team</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Help Us Build <br /> The <span className="text-gradient">Future of Brands</span></h1>
              <p className="text-xl text-white/50">We're looking for passionate individuals who love creativity, data, and challenges. Come join our fast-growing agency culture.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="btn-primary">View Openings</button>
                 <button className="btn-secondary">Life At PIXA</button>
              </div>
           </div>
           <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
                 <img src="https://picsum.photos/seed/career/800/800" alt="Team Culture" className="w-full h-full object-cover rounded-[2rem]" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-2xl animate-bounce">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                       <UserPlus size={24} />
                    </div>
                    <div>
                       <p className="font-bold">We're Hiring!</p>
                       <p className="text-xs text-white/50 uppercase tracking-widest">5 Open Roles</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto space-y-20">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-bold">Why Work Here?</h2>
              <p className="text-white/50 text-xl">Beyond the standard benefits, we offer a culture of growth.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: "Work-Life Harmony", desc: "Flexible hours and remote options for most roles." },
                { icon: Zap, title: "Rapid Growth", desc: "We invest in your learning and career advancement." },
                { icon: Coffee, title: "Modern Culture", desc: "No boring meetings. No stiff hierarchy. High impact." },
                { icon: Briefcase, title: "Top Projects", desc: "Work with global brands and innovative startups." },
              ].map((item, i) => (
                <div key={i} className="glass p-10 rounded-[2.5rem] space-y-6 group hover:bg-brand-primary/5 transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-xl font-display font-bold">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
           <div className="text-center">
              <h2 className="text-4xl font-display font-bold">Open Positions</h2>
           </div>
           <div className="space-y-4">
              {positions.map((job) => (
                <motion.div 
                   key={job.id}
                   whileHover={{ x: 10 }}
                   className="glass p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group cursor-pointer hover:border-brand-primary/50 transition-all"
                >
                   <div className="space-y-2">
                       <h3 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors">{job.title}</h3>
                       <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/30">
                          <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.team}</span>
                          <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                          <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                       </div>
                   </div>
                   <button className="btn-secondary group-hover:bg-brand-primary group-hover:border-brand-primary px-6 py-2 text-xs">Apply Now</button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
