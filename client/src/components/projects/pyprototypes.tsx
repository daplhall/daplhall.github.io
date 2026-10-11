import HighlightDetails from "@components/highlight"
import { languages } from "@data/languages"
import { Icons } from "@data/icon"
import Markdown from "@components/markdown"
import pyprototypes from "@data/projects/content/pyprototypes.md?raw"

export default function PyPrototypes() {
    return (
        <HighlightDetails
            name="Python Function Prototypes"
            languages={[languages.Python]}
            links={[
                {
                    icon: Icons.github,
                    text: "Repo",
                    src: "https://github.com/daplhall/PyFuncPrototypes"
                }
            ]}
        >
            <Markdown>
                {pyprototypes}
            </Markdown>
        </HighlightDetails>

    )
}