import github from "@assets/icons/github.ico"
import pdficon from "@assets/icons/pdf.ico"
import thesis from "@assets/icons/Thesis.ico"


export interface Icon {
    name: string;
    icon: string;
}

export const Icons = {
    github: {
        name: "Github",
        icon: github,
    },
    docs: {
        name: "Documentation",
        icon: pdficon
    },
    thesis: {
        name: "Thesis",
        icon: thesis
    }
} as const satisfies Record<string, Icon>;
