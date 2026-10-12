import BuisnessCard from "@components/avatar/buisness_card"
import Socials from "@components/avatar/socials"
import Snippit from "@components/avatar/snippit"
import about from "@data/avatar/content/about.md?raw"
import prof from "@data/avatar/content/prof_interest.md?raw"
import personal from "@data/avatar/content/personal_interest.md?raw"
import { buisnessCard } from "@data/avatar/card"

const bodies = [
    about,
    prof,
    personal
]

export default function AvatarDescription() {
    return (
        <>
            <BuisnessCard person={buisnessCard} />
            {
                bodies.map(body => (
                    <>
                        <Snippit>
                            {body}
                        </Snippit>
                        <hr />
                    </>
                ))
            }
            <Socials />
        </>
    )
}