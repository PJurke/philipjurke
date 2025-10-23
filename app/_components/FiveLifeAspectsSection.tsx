export default function FiveLifeAspectsSection() {

    const lifeAspects: string[] = [ "Me", "Family", "Friends", "Work", "Society" ];

    return (
        <section className="col-span-12 flex flex-col items-center px-8 py-12 lg:py-20 text-center">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-slate-800">Five Life Aspects</h2>
                <p className="max-w-prose mx-auto font-light text-lg md:text-xl text-slate-600">
                    I organize my life into five aspects, with the goal of achieving long-term balance among them.
                </p>
            </div>

            <ul className="flex flex-col items-center gap-3 mt-8">
                { lifeAspects.map((aspect) => (
                    <li className="font-normal text-lg md:text-xl text-slate-700" key={aspect}>{aspect}</li>
                ))}
            </ul>
        </section>
    );

}