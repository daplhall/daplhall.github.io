import { type ReactNode, Fragment } from "react";
import type { Language } from "@data/languages";
import type { Icon } from "@data/icon";

export interface ProjectLink {
    icon: Icon;
    text: string;
    src: string
}

type HighlightsProb = {
    name: string;
    languages: Language[];
    links: ProjectLink[];
    children: ReactNode;

};

export default function HighlightDetails({ name, languages, links, children }: HighlightsProb) {
    return (
        <>
            <details>
                <summary>
                    <span className="center-align-text"> {name} -
                        {
                            languages.map((language) =>
                                <Fragment key={language.name}> <img />
                                    <img
                                        className="logo_inline"
                                        src={language.src}
                                        alt={language.name} />
                                </Fragment>
                            )
                        }
                    </span>
                </summary>
                <div className="content">
                    <div className="flex-container" style={{ justifyContent: "center" }}>
                        {
                            links.map((link) =>
                                <div className="col text-center" style={{ marginBottom: "5px", marginRight: "7px" }} >
                                    <a className="nav-link" href={link.src} target="_blank">
                                        <img className="logo" src={link.icon.icon} alt={link.icon.name} />
                                        <br />
                                        {link.text}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </details >
        </>
    )

}