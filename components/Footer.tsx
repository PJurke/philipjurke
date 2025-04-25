import { JSX } from "react";

export function Footer(): JSX.Element {
    return (
        <footer className="bg-gray-800 p-4 text-center text-white">
            <a className="hover:underline" href="mailto:webmaster@philipjurke.de">Send me an email.</a>
        </footer>
    );
}