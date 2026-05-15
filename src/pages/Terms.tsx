import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Terms & <span className="text-brand-primary">Conditions</span>
            </h1>
            <p className="text-white/50 text-lg">Last updated: May 2026</p>
          </div>
          <div className="prose prose-invert prose-brand max-w-none space-y-8 text-white/70 leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">1. Introduction</h2>
              <p>Welcome to PIXA. These Terms and Conditions govern your access to and use of our website and any related services. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">2. Our Services</h2>
              <p>PIXA is a digital marketing agency providing services such as performance marketing, content creation, branding, and strategy consulting. Any actual engagement of our services will be governed by a separate Master Service Agreement (MSA) and Statement of Work (SOW).</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">3. Intellectual Property Rights</h2>
              <p>Unless otherwise stated, PIXA owns the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                <p className="font-bold text-white">You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Republish material from the PIXA website</li>
                  <li>Sell, rent, or sub-license material from the website</li>
                  <li>Reproduce, duplicate, or copy material from the website for commercial purposes</li>
                  <li>Redistribute content from PIXA without explicit written permission</li>
                </ul>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">4. User Conduct</h2>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the site in any way that causes damage to the website or impairment of availability.</li>
                <li>Use the site in any way which is unlawful, illegal, fraudulent, or harmful.</li>
                <li>Conduct any systematic or automated data collection activities without our express written consent.</li>
                <li>Attempt to gain unauthorized access to any portion of the website.</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services that are not owned or controlled by PIXA. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">6. Disclaimer of Warranties</h2>
              <p>The information and materials on this website are provided on an "as is" and "as available" basis. PIXA makes no representations or warranties of any kind regarding the operation of this website or the accuracy of the information included on this site.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">7. Limitation of Liability</h2>
              <p>In no event shall PIXA, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">8. Governing Law & Jurisdiction</h2>
              <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Bengaluru, Karnataka for the resolution of any disputes.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">9. Changes to These Terms</h2>
              <p>We reserve the right to modify or replace these Terms at any time. Your continued use of the website following any changes constitutes acceptance of those changes.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}