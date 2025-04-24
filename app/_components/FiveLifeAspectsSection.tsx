export default function FiveLifeAspectsSection() {

    const lifeAspects: string[] = [ "Me", "Family", "Friends", "Work", "Society" ];

    return (
        <section className="bg-slate-50 col-span-12 grid-cols-subgrid py-10 lg:py-20 text-center">
            <h2 className="font-light text-3xl">Five Life Aspects</h2>
            <p className="mt-2 text-gray-500">My life is organized around five aspects:</p>
            <ul className="mt-8">
                { lifeAspects.map((aspect) => (
                    <li className="p-4" key={aspect}>{aspect}</li>
                ))}
            </ul>
        </section>
    );

}