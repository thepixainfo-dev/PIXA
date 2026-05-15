import { Hero } from "../components/home/Hero";
import { TrustedBrands } from "../components/home/TrustedBrands";
import { AboutPreview } from "../components/home/AboutPreview";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { Workflow } from "../components/home/Workflow";
import { Testimonials } from "../components/home/Testimonials";
import { CTABanner } from "../components/home/CTABanner";
import { BlogPreview } from "../components/home/BlogPreview";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustedBrands />
      <AboutPreview />
      <ServicesPreview />
      <Workflow />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </div>
  );
}