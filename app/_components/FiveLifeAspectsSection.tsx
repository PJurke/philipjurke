export default function FiveLifeAspectsSection() {

    const lifeAspects: string[] = [ "Me", "Family", "Friends", "Work", "Society" ];

    return (
        <section className="col-span-12 grid-cols-subgrid px-8 py-8 lg:py-20 text-center">
            <h2 className="font-extralight mb-2 text-4xl">Five Life Aspects</h2>
            <p className="max-w-prose mb-4 mx-auto text-gray-400">
                I organize my life around five life aspects.<br/>
                My goal is to achieve long-term balance among them:
            </p>
            <ul>
                { lifeAspects.map((aspect) => (
                    <li className="p-2" key={aspect}>{aspect}</li>
                ))}
            </ul>
        </section>
    );

}