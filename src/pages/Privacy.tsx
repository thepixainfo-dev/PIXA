import { motion } from "motion/react";
import { BackgroundLines } from "../components/BackgroundLines";

export default function Privacy() {
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
              Privacy <span className="text-brand-primary">Policy</span>
            </h1>
            <p className="text-white/50 text-lg">Last updated: May 2026</p>
          </div>
          <div className="prose prose-invert prose-brand max-w-none space-y-8 text-white/70 leading-relaxed text-lg">
            <p>At PIXA, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PIXA and how we use it.</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">1. Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">2. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">3. Log Files</h2>
              <p>PIXA follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">4. Cookies and Web Beacons</h2>
              <p>Like any other website, PIXA uses cookies. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">5. Third-Party Privacy Policies</h2>
              <p>PIXAs Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">6. Data Protection Rights</h2>
              <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data.</li>
                <li>The right to rectification of inaccurate information.</li>
                <li>The right to erasure of your personal data, under certain conditions.</li>
                <li>The right to restrict processing of your personal data, under certain conditions.</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white">7. Contact Us</h2>
              <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at thepixa.info@gmail.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}