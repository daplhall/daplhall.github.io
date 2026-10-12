import type { Person } from "@data/avatar/card"

type PersonProp = {
    person: Person;
}

export default function BuisnessCard({ person }: PersonProp) {
    return (
        <>
            <h1 className="text-center name">{person.name}</h1>
            <h2 className="text-center">{person.position}</h2>
            <p className="text-center lead contact-info bottom-margin-5">
                <b>Location:</b> {person.location}
            </p>
            <p className="text-center lead contact-info bottom-margin-5">
                <b>Email:</b> {person.email}
            </p>
            <p className="text-center lead contact-info bottom-margin-5" style={{ marginBottom: "10px" }}>
                <b>Phone:</b> {person.phone}
            </p>
        </>
    )
}
