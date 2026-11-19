import Navbar from "@components/navbar"
import Project from "@components/project"
import Avatar from "@components/avatar"
import { projects } from "@data/projects/project"
import { Daniel } from "@data/avatar/base"

export default function About() {
    return (
        <>
            <div className="container center flex flex-center flex-align-center" style={{ marginTop: "24px" }}>
                <Avatar avatar={Daniel} />
            </div >
            <div className="container center">
                <div className="fill">
                    <h1>Things i have built</h1>
                    <p>A collection of projects, experiments and things I've enjoyed creating.</p>
                    <Project project={projects.TTStatsitics} />
                    <Project project={projects.PyPrototypes} />
                    <Project project={projects.Protofolio} />
                    <Project project={projects.PyPreCore} />
                    <h1>Things i am working on</h1>
                    <p>A collection of projects i am currently working on</p>
                    <Project project={projects.HomeSystem} />
                </div>
            </div>
        </>
    )
}
