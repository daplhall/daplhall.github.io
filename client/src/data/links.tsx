import type { Icon } from "@data/icon";

export interface Link {
    text: string;
    src: string;
}

export interface IconLink {
    icon: Icon;
    link: Link;
}