import HeroSection from "./_components/HeroSection";
import FiveLifeAspectsSection from "./_components/FiveLifeAspectsSection";

export default function Home() {
  return (

    <main className="grid grid-cols-12">
      <HeroSection />
      <FiveLifeAspectsSection />
    </main>

  );
}