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
                                src={language.src}
                                alt={language.name} />
                        </Fragment>
                    )
                }
            </>
        >
            <div className="flex-container" style={{ justifyContent: "center" }}>
                {
                    project.links.map((link) =>
                        <div key={link.link.text} className="col text-center" style={{ marginBottom: "5px", marginRight: "7px" }} >
                            <a className="nav-link" href={link.link.src} target="_blank">
                                <img className="icon" src={link.icon.icon} alt={link.icon.name} />
                                <br />
                                {link.link.text}
                            </a>
                        </div>
                    )
                }
            </div>
            <div>
                {project.children}
            </div>
        </HighlightDetails>
    )

}