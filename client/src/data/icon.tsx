import github from "@assets/icons/github.ico"
import pdficon from "@assets/icons/pdf.ico"
import thesis from "@assets/icons/Thesis.ico"
import linkedin from "@assets/icons/Linkedin.ico"


export interface Icon {
    alt: string;
    src: string;
}

export const Icons = {
    Github: {
        alt: "Github",
        src: github,
    },
    Docs: {
        alt: "Documentation",
        src: pdficon
    },
    Thesis: {
        alt: "Thesis",
        src: thesis
    },
    Linkedin: {
        alt: "Linkedin",
        src: linkedin,
    }
} as const satisfies Record<string, Icon>;
