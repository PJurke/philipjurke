export default function HeroSection() {
    return (
        <section className="bg-linear-to-tr from-orange-100 via-emerald-100 to-white col-span-12 flex flex-col gap-3 items-center justify-center min-h-[80vh]">
            <h1 className="font-semibold text-slate-800 text-4xl md:text-5xl lg:text-6xl">
                Philip Jurke
            </h1>
            <p className="font-light text-2xl md:text-3xl lg:text-4xl text-slate-600">
                Agile Coach and Citizen
            </p>
        </section>
    );
}