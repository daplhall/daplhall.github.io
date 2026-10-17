import { Fragment } from "react";
import HighlightDetails from "@components/highlight"
import type { ProjectInfo } from "@data/projects/project";

export default function Project({ project }: { project: ProjectInfo }) {
    return (
        <HighlightDetails
            name=<>{project.name} -
                {
                    project.languages.map((language) =>
                        <Fragment key={language.name}> <img />
                            <img
                                className="inline"
                                src={language.icon.src}
                                alt={language.icon.alt} />
                        </Fragment>
                    )
                }
            </>
        >
            <div className="flex flex-center flex-align-center flex-row flex-gap text-center content"  >

                {
                    project.links.map((link) =>
                        <Fragment key={link.link.text}>
                            <a className="nav-link" href={link.link.src} target="_blank">
                                <img className="icon" src={link.icon.src} alt={link.icon.alt} style={{}} />
                                <br />
                                {link.link.text}
                            </a>
                        </Fragment>
                    )
                }
            </div>
            {project.children}
        </HighlightDetails>
    )

}