import type { Card } from "@data/avatar/base";
import type { IconLink } from "@data/links";
import type { TheAvatar } from "@data/avatar/base"
import { Fragment } from "react/jsx-runtime";


function BuisnessCard({ card, className }: { card: Card, className?: string }) {
    return (
        <>
            <h1 className={className}>{card.name}</h1>
            <h2 className={className}>{card.position}</h2>
            <p className={className}>
                <b>Location:</b> {card.location}
            </p>
            <p className={className}>
                <b>Email:</b> {card.email}
            </p>
            <p className={className} style={{ marginBottom: "10px" }}>
                <b>Phone:</b> {card.phone}
            </p>
        </>
    )
}

function Socials({ linkicons }: { linkicons: IconLink[] }) {
    return (
        <div className="flex flex-evenly flex-align-center" >
            {
                linkicons.map((linkicon) =>
                    <Fragment key={linkicon.link.text}>
                        <div className="text-center">
                            <a className="nav-link" href={linkicon.link.src}
                                target="_blank" >
                                <img
                                    className="icon"
                                    src={linkicon.icon.icon}
                                    alt={linkicon.icon.name}
                                />
                                <br />
                                {linkicon.link.text}
                            </a>
                        </div>
                    </Fragment>
                )
            }
        </ div >
    )
}


export default function Avatar({ avatar }: { avatar: TheAvatar }) {
    return (
        <>
            <div className="right-margin-24">
                < img
                    src={avatar.portrait}
                    alt="ProfileImage"
                    className="circle"
                    id="mugshot"
                    width="300px"
                />
            </div >
            <div className="fill-66">
                <div className="card">
                    <BuisnessCard className="text-center" card={avatar.card} />
                </div>
                {avatar.children}
                <Socials linkicons={avatar.socials} />
            </div>
        </>
    )
}