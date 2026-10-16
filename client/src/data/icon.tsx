import github from "@assets/icons/github.ico"
import pdficon from "@assets/icons/pdf.ico"
import thesis from "@assets/icons/Thesis.ico"
import linkedin from "@assets/icons/Linkedin.ico"


export interface Icon {
    name: string;
    icon: string;
}

export const Icons = {
    Github: {
        name: "Github",
        icon: github,
    },
    Docs: {
        name: "Documentation",
        icon: pdficon
    },
    Thesis: {
        name: "Thesis",
        icon: thesis
    },
    Linkedin: {
        name: "Linkedin",
        icon: linkedin,
    }
} as const satisfies Record<string, Icon>;
