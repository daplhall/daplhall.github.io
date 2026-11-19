import HighlightDetails from "@components/highlight"
import type { ProjectInfo } from "@data/projects/project";
import TechTag from "@components/techtags";

export default function Project({ project }: { project: ProjectInfo }) {
    return (
        <HighlightDetails
            name=<>
	    {project.name}
	    <div className="tech-tags">
                {
                    project.languages.map((language) =>
                        <TechTag language={language} key={language.name}/>
                    )
                }

	    </div>
            </>
        >
            <div>
                {
                    project.links.map((link) =>
                        <div className="icon-links" key={link.link.text}>
                            <a className="icon-link" href={link.link.src} target="_blank">
                                <img className="icon" src={link.icon.src} alt={link.icon.alt} style={{}} />
				<p>
					{link.link.text}
				</p>
                            </a>
                        </div>
                    )
                }
            </div>
            {project.children}
        </HighlightDetails>
    )

}
