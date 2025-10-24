import { JSX } from "react";

type TimelineEvent = {
    date: string;
    title: string;
}

const events: TimelineEvent[] = [
    { date: "08.01.1992", title: "Birth in Leipzig" },
    { date: "03.09.2018", title: "Start at Deutsche Telekom IT GmbH" },
];

export default function TimelineSection(): JSX.Element {

    return (
        <section className="bg-white col-span-12 flex flex-col items-center px-8 py-8 lg:py-20">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-slate-800">Timeline</h2>
                <p className="max-w-prose mx-auto font-light text-lg md:text-xl text-slate-600">
                    Some milestones along my journey – both professional and personal.
                </p>
            </div>

            <div className="relative mt-8 max-w-3xl w-full">
                <div 
                    className="absolute left-4 top-0 h-full w-0.5 bg-slate-200" 
                    aria-hidden="true">
                </div>

                <ul className="flex flex-col gap-8">
                    {events.map((event, index) => (
                        <li key={index} className="relative pl-12">
                            
                            <div className="absolute left-4 top-1.5 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white ring-2 ring-slate-200"></div>
                            
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-slate-700 text-lg">
                                    {event.date}
                                </span>
                                <p className="font-normal text-slate-600 text-base">
                                    {event.title}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );

}