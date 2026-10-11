import HighlightDetails from "@components/core/highlight"
import { languages } from "@components/core/languages"
import { Icons } from "@components/core/icon"
import Markdown from "@components/core/markdown"
import ttstatistics from "@content/projects/ttstatistics.md?raw"

export default function TTStatistics() {
    return (
        <HighlightDetails
            name="TTStatistics: A Statistical Library"
            languages={[languages.Python]}
            links={[
                {
                    icon: Icons.github,
                    text: "Repo",
                    src: "https://github.com/daplhall/dicechanics"
                }
            ]}>
            <Markdown>
                {ttstatistics}
            </Markdown>
        </HighlightDetails>

    )
}