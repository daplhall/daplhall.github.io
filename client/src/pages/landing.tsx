
import Avatar from '@components/avatar/avatar'
import Navbar from '@components/navbar'
import Projects from '@components/projects/main'
import '@style/style.css'

export default function Landing() {
    return (
        <>
            <Navbar />
            <Avatar />
            <Projects />
        </>
    )
}