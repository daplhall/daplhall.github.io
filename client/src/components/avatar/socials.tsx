import github from "@assets/icons/github.ico"
import linkedin from "@assets/icons/Linkedin.ico"
import pdfico from "@assets/icons/pdf.ico"

export default function Socials() {
    return (
        <div className="flex-container" style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
            <div className="text-center"><a className="nav-link" href="https://github.com/daplhall"
                target="_blank"><img className="logo" src={github}
                    alt="Github" /><br />
                Github</a>
            </div>
            <div className="text-center">
                <a className="nav-link"
                    href="https://www.linkedin.com/in/daniel-ploug-hall-a960b1217/"
                    target="_blank">
                    <img className="logo" src={linkedin}
                        alt="Linkedin" />
                    <br />
                    Linkedin
                </a>
            </div>
            <div className="text-center">
                <a className="nav-link" href="pdf/DanielHallCV.pdf"
                    target="_blank" ><img className="logo" src={pdfico}
                        alt="resume" /><br />
                    Resume
                </a>
            </div>
        </div>
    )
}
