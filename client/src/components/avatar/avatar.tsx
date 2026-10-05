import Mugshot from "@components/avatar/mugshot"
import AvatarDescription from "@components/avatar/description"

export default function Avatar() {
    return (
        <div className="container" id="aboutme">
            <div className="flex-container-screen" style={{ marginTop: '24px' }}>
                <div className="flex-left">
                    <Mugshot />
                </div>
                <div className="flex-right">
                    <AvatarDescription />
                </div>
            </div>
        </div >
    )
}