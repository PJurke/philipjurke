import HeroSection from "./_components/HeroSection";
import FiveLifeAspectsSection from "./_components/FiveLifeAspectsSection";
import ToolsSection from "./_components/ToolsSection";
import TimelineSection from "./_components/TimelineSection";

export default function Home() {
  return (

    <main className="grid grid-cols-12">
      <HeroSection />
      <FiveLifeAspectsSection />
      <ToolsSection />
      <TimelineSection />
    </main>

  );
}