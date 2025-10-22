export default function ToolsSection() {

    // Die von dir genannte Liste
    const tools: string[] = [
        "Affinity Publisher",
        "ChatGPT",
        "Confluence",
        "Gemini",
        "Jira",
        "Miro",
        "NotebookLM"
    ];

    return (
        <section className="bg-gray-50 col-span-12 px-8 py-8 lg:py-20 text-center">
            <h2 className="font-extralight text-4xl mb-2">Tools</h2>
            <p className="max-w-prose mb-4 mx-auto text-gray-400">
                I regularly use a range of tools to advance my work and personal projects.
            </p>
            
            {/* Mobile-First Grid: 
              - Default (Mobile): 2 cols (grid-cols-2)
              - sm (640px+): 3 cols (sm:grid-cols-3)
              - md (768px+): 4 cols (md:grid-cols-4)
              - lg (1024px+): 6 cols (lg:grid-cols-6)
            */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {tools.map((tool) => (
                    <li
                        className="bg-white hover:bg-amber-100 flex font-medium items-center justify-center min-h-[100px] p-4 rounded-lg shadow-sm text-center text-sm text-gray-800 transition-colors"
                        key={tool}
                    >
                        {tool}
                    </li>
                ))}
            </ul>
        </section>
    );
}