import HighlightDetails from "@components/highlight"
import { languages } from "@data/languages"
import { Icons } from "@data/icon"
import Markdown from "@components/markdown"
import ttstatistics from "@data/projects/content/ttstatistics.md?raw"

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