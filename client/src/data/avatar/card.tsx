export type Person = {
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
} satisfies Person;