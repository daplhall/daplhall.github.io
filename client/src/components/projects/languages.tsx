export interface Language {
    name: string;
    src: string;
}

export const languages = {
    Python: {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    C: {
        name: "C",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    Cpp: {
        name: "C++",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    }
} as const satisfies Record<string, Language>;