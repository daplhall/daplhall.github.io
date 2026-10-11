import BuisnessCard from "@components/avatar/buisness_card"
import Socials from "@components/avatar/socials"
import Snippit from "@components/avatar/snippit"
import about from "@content/avatar/about.md?raw"
import prof from "@content/avatar/prof_interest.md?raw"
import personal from "@content/avatar/personal_interest.md?raw"
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