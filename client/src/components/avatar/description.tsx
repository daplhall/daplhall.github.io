import BuisnessCard from "@components/avatar/buisness_card"
import Socials from "@components/avatar/socials"
import Snippit from "@components/avatar/snippit"
import about from "@content/avatar/about.md?raw"
import prof from "@content/avatar/prof_interest.md?raw"
import personal from "@content/avatar/personal_interest.md?raw"

export default function AvatarDescription() {
    return (
        <>
            <BuisnessCard />

            <Snippit>
                {about}
            </Snippit>
            <hr />
            <Snippit>
                {prof}
            </Snippit>
            <hr />
            <Snippit>
                {personal}
            </Snippit>
            <Socials />
        </>
    )
}