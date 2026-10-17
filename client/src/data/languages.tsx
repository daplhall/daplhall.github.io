import { type Icon } from "@data/icon"

export interface Language {
    name: string;
    icon: Icon;
}

export const languages = {
    Python: {
        name: "Python",
        icon: {
            alt: "python",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        }
    },
    C: {
        name: "C",
        icon: {
            alt: "C",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        }

    },
    Cpp: {
        name: "C++",
        icon: {
            alt: "C++",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        }
    },
    CMake: {
        name: "CMake",
        icon: {
            alt: "cmake",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg"
        }
    },
    React: {
        name: "React",
        icon: {
            alt: "react",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        }
    },
    Html: {
        name: "HTML",
        icon: {
            alt: "html",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        }
    },
    Typescript: {
        name: "TypeScript",
        icon: {
            alt: "typescript",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        }
    }
} as const satisfies Record<string, Language>;