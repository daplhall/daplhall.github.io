import {type Language} from "@data/languages"

interface TechTagProps {
    language: Language
}

export default function TechTag({language}: TechTagProps) {
    return (
	<span className="tech-tag" key={language.name}>
	    {language.name} {" "} <img className="inline ml-2.5" src={language.icon.src}/>
	</span>
    )
}
