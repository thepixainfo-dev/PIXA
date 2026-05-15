import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background-deep border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="https://drive.google.com/thumbnail?id=1x0rvZVjcA-WrYxoRNd0qnKJ6dIC2hq3P&sz=w500" alt="PIXA Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm">Premium digital creative agency defining the future of brands through immersive strategy and technical precision.</p>
            <div className="flex items-center gap-4">
              {[{Icon: Instagram, href: "https://www.instagram.com/thepixa_official/"},{Icon: Facebook, href: "https://www.facebook.com/thepixa"}].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary transition-all group">
                  <s.Icon size={16} className="text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8 font-sans">Company</h4>
            <ul className="space-y-4">
              {["Home","About","Portfolio","Case Studies","Blog","Careers"].map((item) => (
                <li key={item}><Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ","-")}`} className="text-white/60 hover:text-brand-primary transition-colors text-sm font-medium">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8 font-sans">Contact</h4>
            <div className="space-y-4">
              <p className="text-sm text-white/60">thepixa.info@gmail.com</p>
              <p className="text-sm text-white/60">BTM Layout Stage 1, Bengaluru</p>
              <div className="pt-4 flex gap-2">
                <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-brand-primary/20 text-brand-primary flex items-center justify-center text-[8px] font-bold">SEO</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm text-center md:text-left">© {currentYear} PIXA Agency. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/privacy" className="text-white/40 hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}