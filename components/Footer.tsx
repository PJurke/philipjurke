import { JSX } from "react";

export function Footer(): JSX.Element {
    return (
        <footer className="bg-slate-50 p-4 text-center">
            <a className="hover:underline" href="mailto:webmaster@philipjurke.de">Write an e-mail to me</a>
        </footer>
    );
}