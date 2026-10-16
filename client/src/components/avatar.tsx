import type { Card } from "@data/avatar/base";
import type { IconLink } from "@data/links";
import type { TheAvatar } from "@data/avatar/base"
import { Fragment } from "react/jsx-runtime";


function BuisnessCard({ card }: { card: Card }) {
    return (
        <>
            <h1 className="text-center name">{card.name}</h1>
            <h2 className="text-center">{card.position}</h2>
            <p className="text-center lead contact-info bottom-margin-5">
                <b>Location:</b> {card.location}
            </p>
            <p className="text-center lead contact-info bottom-margin-5">
                <b>Email:</b> {card.email}
            </p>
            <p className="text-center lead contact-info bottom-margin-5" style={{ marginBottom: "10px" }}>
                <b>Phone:</b> {card.phone}
            </p>
        </>
    )
}



function Socials({ linkicons }: { linkicons: IconLink[] }) {
    return (
        <div className="flex-container" style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
            {
                linkicons.map((linkicon) =>
                    <Fragment key={linkicon.link.text}>
                        <div className="text-center">
                            <a className="nav-link" href={linkicon.link.src}
                                target="_blank" >
                                <img
                                    className="logo"
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
        <div className="flex-container-screen" style={{ marginTop: '24px' }}>
            <div className="flex-left">
                <img
                    src={avatar.portrait}
                    alt="ProfileImage"
                    className="circle"
                    id="mugshot"
                    width="300px"
                />
            </div>
            <div className="flex-right">
                <BuisnessCard card={avatar.card} />
                {avatar.children}
                <hr />
                <Socials linkicons={avatar.socials} />
            </div>
        </div>
    )
}