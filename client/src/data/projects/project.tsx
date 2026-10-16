import { languages, type Language } from "@data/languages";
import type { IconLink } from "../links";
import { type ReactNode } from "react";
import { Icons } from "@data/icon";

import pyprototypes from "@data/projects/content/PyPrototypes.md?raw"
import ttstatistics from "@data/projects/content/TTStatistics.md?raw"
import pyprecore from "@data/projects/content/PyPreCore.md?raw"
import portofolio from "@data/projects/content/Portofolio.md?raw"
import cwebscraper from "@data/projects/content/CWebScraper.md?raw"
import Article from "@components/content/article";

export interface ProjectInfo {
    name: string
    children: ReactNode
    links: IconLink[]
    languages: Language[]
}

export const projects = {
    TTStatsitics: {
        name: "TTStatistics: A Statistical Library",
        children: <Article>{ttstatistics}</Article>,
        links: [],
        languages: [languages.Python]
    },
    PyPrototypes: {
        name: "Python Function Prototypes",
        children: <Article>{pyprototypes}</Article>,
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
        children: <Article>{pyprecore}</Article>,
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
        children: <Article>{portofolio}</Article>,
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
        children: <Article>{cwebscraper}</Article>,
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