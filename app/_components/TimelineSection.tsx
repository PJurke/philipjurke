"use client";
import { JSX } from "react";

type TimelineEvent = {
    // YYYY-MM-DD
    date: string;
    category: 'Career' | 'Certification' | 'Current' | 'Degree' | 'Education' | 'Personal' | 'Qualification' | 'Training';
    title: string;
}

const events: TimelineEvent[] = [
    { date: "1992-01-08", category: "Personal", title: "Birth in Leipzig" },
    { date: "2010-09-30", category: "Education", title: "A-levels at the BIP Kreativitätsgymnasium Leipzig" },
    { date: "2015-08-31", category: "Qualification", title: "IT Specialist for Application Development" },
    { date: "2018-07-31", category: "Degree", title: "B.Sc. Business Information Systems" },
    { date: "2018-09-03", category: "Career", title: "Start at Deutsche Telekom IT GmbH" },
    { date: "2021-03-31", category: "Certification", title: "SAFe Scrum Master" },
    { date: "2021-11-30", category: "Certification", title: "SAFe Advanced Scrum Master" },
    { date: "2021-12-31", category: "Training", title: "LevelUp! NextGen Leadership Training" },
    { date: "2022-09-30", category: "Training", title: "Agile Coach Training" },
];

function formatDisplayDate(isoDate: string): string {
    const [year, month, day] = isoDate.split('-');
    return `${day}.${month}.${year}`;
}

function getTodayAsIsoDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default function TimelineSection(): JSX.Element {

    const todayEvent: TimelineEvent = {
        date: getTodayAsIsoDate(),
        category: "Current",
        title: "Agile Coach"
    };

    const allEvents = [...events, todayEvent];

    const sortedEvents = allEvents.sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className="bg-white col-span-12 flex flex-col items-center px-8 py-8 lg:py-20">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-slate-800">Timeline</h2>
                <p className="max-w-prose mx-auto font-light text-lg md:text-xl text-slate-600">
                    Some milestones along my journey – both professional and personal.
                </p>
            </div>

            <div className="relative mt-8 max-w-3xl w-full">

                <ol className="flex flex-col gap-8">
                    {sortedEvents.map((event, index) => {

                        const isLast = index === sortedEvents.length - 1;

                        return (

                            <li key={event.title} className="group pl-12 relative">

                                {/* Point */}
                                <div className="absolute left-4 top-1.5 -translate-x-1/2 w-4 h-4
                                    bg-emerald-500 group-hover:bg-amber-400
                                    rounded-full border-4 border-white ring-2 ring-slate-200 z-10
                                    transition-colors duration-200 ease-in-out"></div>

                                {!isLast && (
                                    <div className="absolute left-4 top-6 -translate-x-1/2 w-0.5 bg-slate-200 h-[calc(100%+2rem)]" aria-hidden="true"></div>
                                )}
                                
                                <div className="flex flex-col gap-1">
                                    <time dateTime={event.date} className="font-semibold text-slate-700 text-lg">
                                        {formatDisplayDate(event.date)}
                                    </time>
                                    <p className="font-normal text-slate-600 text-base">
                                        <span className="font-medium text-slate-800">{event.category}:</span> {event.title}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );

}