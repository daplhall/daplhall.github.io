import HighlightDetails from "@components/core/highlight"
import { languages } from "@components/core/languages"
import { Icons } from "@components/core/icon"
import Markdown from "@components/core/markdown"
import pyprototypes from "@content/projects/pyprototypes.md?raw"

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