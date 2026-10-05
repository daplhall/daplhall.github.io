import { type ReactNode, Fragment } from "react";
import type { Language } from "@components/projects/languages";
import type { Icon } from "@components/core/icon";

export interface ProjectLink {
    icon: Icon;
    text: string;
    src: string
}

type Highlights = {
    name: string;
    languages: Language[];
    links: ProjectLink[];
    body: ReactNode;
};

export default function HighlightDetails({ name, languages, links, body }: Highlights) {
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
                <div>
                    { }
                </div>
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
                        {body}
                    </div>
                </div>
            </details >
        </>
    )

}