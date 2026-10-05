import BuisnessCard from "./buisness_card"
import Socials from "./socials"

export default function AvatarDescription() {
    return (
        <>
            <BuisnessCard />
            <p className="lead">I am a software developer who focuses on Parallel
                Computing, HPC, databases and data pipelines. I am passionate about
                computer simulations and love the mathematical beauty of numerical
                methods.</p>
            <hr />
            <p className="lead"><b>Professional interests:</b> Algorithm design,
                High performance computing, Numerical methods, Parallel
                computing</p>
            <hr />
            <p className="lead"><b>Alternative Interest:</b> Game design for
                roleplaying games</p>
            <hr />
            <Socials />
        </>
    )
}