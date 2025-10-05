import { HeroSection } from '@/components/landing/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { Testimonials } from '@/components/landing/testimonials';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
