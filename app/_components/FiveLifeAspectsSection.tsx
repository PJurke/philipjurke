interface LifeAspect {
  name: string;
  hoverBg: string;
  hoverShadow: string;
}

const lifeAspects: LifeAspect[] = [
    { name: "Me", hoverBg: "hover:bg-emerald-50", hoverShadow: "hover:shadow-emerald-200" },
    { name: "Family", hoverBg: "hover:bg-orange-50", hoverShadow: "hover:shadow-orange-200" },
    { name: "Friends", hoverBg: "hover:bg-amber-50", hoverShadow: "hover:shadow-amber-200" },
    { name: "Work", hoverBg: "hover:bg-blue-50", hoverShadow: "hover:shadow-blue-200" },
    { name: "Society", hoverBg: "hover:bg-red-50", hoverShadow: "hover:shadow-red-200" }
] as const;

export default function FiveLifeAspectsSection() {

    return (
        <section className="col-span-12 flex flex-col items-center px-8 py-12 lg:py-20 text-center">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-slate-800">Five Life Aspects</h2>
                <p className="max-w-prose mx-auto font-light text-lg md:text-xl text-slate-600">
                    I organize my life into five aspects, with the goal of achieving long-term balance among them.
                </p>
            </div>

            <ul className="flex flex-row flex-wrap justify-center items-center gap-3 max-w-sm mt-8 mx-auto">
                { lifeAspects.map((aspect) => (
                    <li className={`bg-white rounded-full shadow-sm
                                   font-normal text-lg md:text-xl
                                   px-6 py-2
                                   text-slate-700
                                   cursor-default
                                   transition-all duration-200
                                   ${aspect.hoverBg}
                                   ${aspect.hoverShadow}`}
                        key={aspect.name}>
                        {aspect.name}
                    </li>
                ))}
            </ul>
        </section>
    );

}