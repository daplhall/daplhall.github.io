import HighlightDetails from "@components/core/highlight"
import { languages } from "../../data/languages"
import { Icons } from "../../data/icon"
import Markdown from "@components/core/markdown"
import portofolio from "@content/projects/portofolio.md?raw"

export default function Protofolio() {
    return (
        <HighlightDetails
            name="Protofolio Website"
            links={[
                {
                    icon: Icons.github,
                    text: "Repo",
                    src: "https://github.com/daplhall/daplhall.github.io"
                }
            ]}
            languages={[languages.Html, languages.Typescript, languages.React]}
        >
            <Markdown>
                {portofolio}
            </Markdown>
        </HighlightDetails>
    )
}