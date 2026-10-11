import HighlightDetails from "@components/highlight"
import { languages } from "../../data/languages"
import { Icons } from "../../data/icon"
import Markdown from "@components/markdown"
import cwebscraper from "@data/projects/content/cwebscraper.md?raw"

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


