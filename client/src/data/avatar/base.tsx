import { type ReactNode } from "react";
import { type IconLink } from "@data/links";
import { Icons } from "@data/icon"
import Mugshot from "@assets/images/mugshot.png";
import about from "@data/avatar/content/about.md?raw"
import Section from "@components/content/section"

export interface TheAvatar {
    portrait: string;
    socials: IconLink[];
    card: Card;
    children: ReactNode;
}

export interface Card {
    name: string;
    position: string;
    location: string;
    email: string;
    phone: string;
};

export const buisnessCard = {
    name: "Daniel Ploug Hall",
    position: "Data Scientist @ Saxo Bank",
    location: "Copenhagen, Denmark",
    email: "danielploug@hotmail.com",
    phone: "+45 60 15 26 04"
} as const satisfies Card;

export const Daniel = {
    portrait: Mugshot,
    socials: [
        {
            icon: Icons.Github,
            link: {
                text: "Github",
                src: "https://github.com/daplhall"
            }
        },
        {
            icon: Icons.Linkedin,
            link: {
                text: "Linkedin",
                src: "https://www.linkedin.com/in/daniel-ploug-hall-a960b1217/"
            }
        },
        {
            icon: Icons.Docs,
            link: {
                text: "Resume",
                src: "pdf/DanielHallCV.pdf"
            }
        },
    ],
    card: buisnessCard,
    children: <Section className="description">{about}</Section>
} as const satisfies TheAvatar;