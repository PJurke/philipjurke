import FiveLifeAspectsSection from "./_components/FiveLifeAspectsSection";

export default function Home() {
  return (

    <main className="grid grid-cols-12 gap-4">
      <section className="bg-slate-50 col-span-12 flex items-center justify-center  min-h-[80vh]">
        <h1 className="font-light text-5xl">Philip Jurke</h1>
      </section>

      <FiveLifeAspectsSection />
    </main>

  );
}