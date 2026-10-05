import HighlightDetails from "@components/core/highlight"
import { languages } from "@components/projects/languages"
import { Icons } from "@components/core/icon"
import TTStatistics from "@components/projects/bodies/ttstatistics"
import PyPreCore from "@components/projects/bodies/pyprecore"

export default function Projects() {
    return (
        <div className="container" id="projects">
            <h1 className="section">Completed projects</h1>
            <HighlightDetails
                name="TTStatistics: A Statistical Library"
                languages={[languages.Python]}
                body={<TTStatistics />}
                links={[
                    {
                        icon: Icons.github,
                        text: "Repo",
                        src: "https://github.com/daplhall/dicechanics"
                    }
                ]}
            />
            <HighlightDetails
                name="PyPreCore: Post-processing Dust Simulation"
                languages={[languages.Python]}
                body={<PyPreCore />}
                links={[
                    {
                        icon: Icons.github,
                        text: "Repo",
                        src: "https://github.com/daplhall/dicechanics"
                    },
                    {
                        icon: Icons.thesis,
                        text: "Thesis",
                        src: "pdf/DanielHallThesis.pdf"
                    }
                ]}
            />

        </div>
    )
}