export default function FiveLifeAspectsSection() {

    const lifeAspects: string[] = [ "Me", "Family", "Friends", "Work", "Society" ];

    return (
        <section className="bg-gray-50 col-span-12 grid-cols-subgrid px-8 py-10 lg:py-20 text-center">
            <h2 className="font-light text-3xl">Five Life Aspects</h2>
            <p className="max-w-prose mt-2 mx-auto text-gray-500">
                I organize my life around five life aspects.
                My goal is to achieve long-term balance among them:
            </p>
            <ul className="mt-8">
                { lifeAspects.map((aspect) => (
                    <li className="p-4" key={aspect}>{aspect}</li>
                ))}
            </ul>
        </section>
    );

}