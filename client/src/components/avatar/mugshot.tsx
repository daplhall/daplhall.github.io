import mugshot from '@assets/images/mugshot.png'
export default function Mugshot() {
    return (
        <img
            src={mugshot}
            alt="I hate my life"
            className="circle"
            id="mugshot"
            width="300px"
        />
    )
}