export default function ToolsSection() {

    // Die von dir genannte Liste
    const tools: string[] = [
        "Affinity Publisher",
        "Canva",
        "Capacities",
        "ChatGPT",
        "Confluence",
        "Gemini",
        "Jira",
        "Miro",
        "NotebookLM"
    ];

    return (
        
        <section className="bg-slate-50 col-span-12 flex flex-col items-center px-8 py-8 lg:py-20">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-slate-800">Tools</h2>
                <p className="max-w-prose mx-auto font-light text-lg md:text-xl text-slate-600  ">
                    I regularly use a range of tools to advance my work, but also my personal projects.
                    The boundaries between the two are often blurred.
                </p>
            </div>
            
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-8">
                {tools.map((tool) => (
                    <li className="bg-white cursor-default
                                  hover:bg-white hover:shadow-lg hover:-translate-y-1
                                  flex font-medium items-center justify-center
                                  min-h-[100px] p-4 rounded-lg 
                                  shadow-sm 
                                  text-center text-sm text-slate-700 
                                  transition-all duration-200" key={tool}>
                        {tool}
                    </li>
                ))}
            </ul>
        </section>
    );
}