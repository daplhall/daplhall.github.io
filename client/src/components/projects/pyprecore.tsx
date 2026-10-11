import HighlightDetails from "@components/core/highlight"
import { languages } from "../../data/languages"
import { Icons } from "../../data/icon"
import Markdown from "@components/core/markdown"
import pyprecore from "@content/projects/pyprecore.md?raw"

export default function PyPreCore() {
    return (
        <HighlightDetails
            name="PyPreCore: Post-processing Dust Simulation"
            languages={[languages.Python]}
            links={[
                {
                    icon: Icons.github,
                    text: "Repo",
                    src: "https://github.com/daplhall/pyprecore"
                },
                {
                    icon: Icons.thesis,
                    text: "Thesis",
                    src: "pdf/DanielHallThesis.pdf"
                }
            ]}
        >
            <Markdown>
                {pyprecore}
            </Markdown>
        </HighlightDetails>
    )
}



