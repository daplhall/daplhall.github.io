import { languages, type Language } from "@data/languages";
import type { IconLink } from "../links";
import { type ReactNode } from "react";
import Markdown from "@components/markdown";
import { Icons } from "@data/icon";

import pyprototypes from "@data/projects/content/PyPrototypes.md?raw"
import ttstatistics from "@data/projects/content/TTStatistics.md?raw"
import pyprecore from "@data/projects/content/PyPreCore.md?raw"
import portofolio from "@data/projects/content/Portofolio.md?raw"
import cwebscraper from "@data/projects/content/CWebScraper.md?raw"

export interface ProjectInfo {
    name: string
    children: ReactNode
    links: IconLink[]
    languages: Language[]
}

export const projects = {
    TTStatsitics: {
        name: "TTStatistics: A Statistical Library",
        children: <Markdown>{ttstatistics}</Markdown>,
        links: [
            {
                icon: Icons.Github,
                link: {
                    text: "Repo",
                    src: "https://github.com/daplhall/daplhall.github.io"
                }
            }
        ],
        languages: [languages.Python]
    },
    PyPrototypes: {
        name: "Python Function Prototypes",
        children: <Markdown>{pyprototypes}</Markdown>,
        languages: [languages.Python],
        links: [
            {
                icon: Icons.Github,
                link: {
                    text: "Repo",
                    src: "https://github.com/daplhall/PyFuncPrototypes"
                }
            }
        ],
    },
    PyPreCore: {
        name: "PyPreCore: Post-processing Dust Simulation",
        children: <Markdown>{pyprecore}</Markdown>,
        languages: [languages.Python],
        links: [
            {
                icon: Icons.Github,
                link: {
                    text: "Repo",
                    src: "https://github.com/daplhall/pyprecore"
                }
            },
            {
                icon: Icons.Thesis,
                link: {
                    text: "Thesis",
                    src: "pdf/DanielHallThesis.pdf"
                }
            }
        ],
    },
    Protofolio: {
        name: "Protofolio Website",
        children: <Markdown>{portofolio}</Markdown>,
        links: [
            {
                icon: Icons.Github,
                link: {
                    text: "Repo",
                    src: "https://github.com/daplhall/daplhall.github.io"
                }
            }
        ],
        languages: [languages.Html, languages.Typescript, languages.React],

    },
    CWebScraper: {
        name: "A web scraper",
        children: <Markdown>{cwebscraper}</Markdown>,
        languages: [languages.C, languages.Cpp, languages.CMake],
        links: [
            {
                icon: Icons.Github,
                link: {
                    text: "Repo",
                    src: "https://github.com/daplhall/CWebScrapeing"
                }
            }
        ],
    }
} as const satisfies Record<string, ProjectInfo>