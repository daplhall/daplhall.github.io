import Navbar from "@components/navbar"
import Project from "@components/project"
import Avatar from "@components/avatar"
import { projects } from "@data/projects/project"
import { Daniel } from "@data/avatar/base"

export default function About() {
    return (
        <>
            <Navbar />
            <div className="container center flex fill-66" style={{ marginTop: "24px" }}>
                <Avatar avatar={Daniel} />
            </div >
            <div className="container center">
                <div className="fill">
                    <h1>Completed projects</h1>
                    <Project project={projects.TTStatsitics} />
                    <Project project={projects.PyPreCore} />
                    <Project project={projects.Protofolio} />
                    <h1>Work in progress</h1>
                    <Project project={projects.CWebScraper} />
                    <Project project={projects.PyPrototypes} />
                </div>
            </div>
        </>
    )
}