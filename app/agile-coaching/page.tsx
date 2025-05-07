import { JSX } from "react";

interface ComponentProps {
    className?: string;
}

export default function AgileCoachingPage(): JSX.Element {
    return (
        <section className="flex flex-col md:flex-row gap-4 items-center min-h-[80vh]">
            <GoldenCircle className="flex-1"></GoldenCircle>
            <GoldenDescription className="flex-1"></GoldenDescription>
        </section>
    );
}

function GoldenCircle({ className }: ComponentProps): JSX.Element {

    const svgSize = 320; // SVG size
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    const whatRadius = svgSize / 2 - 10; // Outer circle
    const howRadius = whatRadius * 0.75;  // Middle circle
    const whyRadius = whatRadius * 0.5;   // Inner circle

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
            <circle cx={centerX} cy={centerY} r={whatRadius} fill="#B9E8D4" />
            <circle cx={centerX} cy={centerY} r={howRadius} fill="#FFC145" />
            <circle cx={centerX} cy={centerY} r={whyRadius} fill="#E66161" />
        </svg>
    );
}

function GoldenDescription({ className }: ComponentProps): JSX.Element {
    return (
        <div className={className}>
            <h2 className="text-xl">Why Agile Coaching?</h2>
            <ul className="list-disc mt-2">
                <li>The world is changing fast</li>
                <li>Changing expectations</li>
                <li>More competitors</li>
                <li>Need for cultural change</li>
                <li>Increasing complexity</li>
            </ul>

            <h2 className="mt-4 text-xl">How is coaching done?</h2>
            <ul className="list-disc mt-2">
                <li>Value and principle-oriented</li>
                <li>Values: respect, transparency, openness, togetherness</li>
                <li>Critical but healthy self-reflection</li>
                <li>By means of coaching, mentoring, training, facilitation</li>
            </ul>

            <h2 className="mt-4 text-xl">What is coached?</h2>
            <ul className="list-disc mt-2">
                <li>Agile and lean working methods</li>
                <li>Improvement of team dynamics</li>
                <li>Promotion of self-organization</li>
                <li>Establishing a sustainable corporate culture</li>
            </ul>
        </div>
    );
}