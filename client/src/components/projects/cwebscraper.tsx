import HighlightDetails from "@components/core/highlight"
import { languages } from "@components/core/languages"
import { Icons } from "@components/core/icon"
import Markdown from "@components/core/markdown"
import cwebscraper from "@content/projects/cwebscraper.md?raw"

export default function CWebScraper() {
    return (
        <HighlightDetails
            name="A web scraper"
            languages={[languages.C, languages.Cpp]}
            links={[
                {
                    icon: Icons.github,
                    text: "Repo",
                    src: "https://github.com/daplhall/CWebScrapeing"
                }
            ]}
        >
            <Markdown>
                {cwebscraper}
            </Markdown>
        </HighlightDetails>
    )
}


