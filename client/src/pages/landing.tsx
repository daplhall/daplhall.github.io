import Navbar from "@components/navbar"
import Project from "@components/project"
import Avatar from "@components/avatar"
import { projects } from "@data/projects/project"
import { Daniel } from "@data/avatar/base"

export default function About() {
    return (
        <>
            <Navbar />
            <div className="container" id="aboutme">
                <Avatar avatar={Daniel} />
            </div>
            <div className="container" id="projects">
                <h1 className="section">Completed projects</h1>
                <Project project={projects.TTStatsitics} />
                <Project project={projects.PyPreCore} />
                <Project project={projects.Protofolio} />
                <h1 className="section">Work in progress</h1>
                <Project project={projects.CWebScraper} />
                <Project project={projects.PyPrototypes} />
            </div>
        </>
    )
}