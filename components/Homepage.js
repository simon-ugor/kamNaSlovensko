
import Link from "next/link"

const Homepage = () => {
    return (
        <div className="homepage-link-div">
            <Link href="/"><p className="link-footer">Domovská stránka</p></Link>
        </div>
    )
}

export default Homepage