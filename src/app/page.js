import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-green/30">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      {/* Trust/Social Proof Strip could go here */}
      <Pricing />
      <FAQ />
      <BookDemo />
      <Footer />
    </main>
  );
}
