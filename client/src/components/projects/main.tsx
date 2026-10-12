import CWebScraper from "@components/projects/cwebscraper"
import PyPreCore from "@components/projects/pyprecore"
import TTStatistics from "@components/projects/ttstatistics"
import PyPrototypes from "@components/projects/pyprototypes"
import Portofolio from "@components/projects/portofolio"


export default function Projects() {
    return (
        <div className="container" id="projects">
            <h1 className="section">Completed projects</h1>
            <TTStatistics />
            <PyPreCore />
            <Portofolio />
            <h1 className="section">Work in progress</h1>
            <CWebScraper />
            <PyPrototypes />
        </div>
    )
}