
import Link from "next/link"

const Facility = (props) => {
    return (
        <Link href={props.link}>
        <a className="facility-main-div">
            <h2 className="facility-heading">{props.heading}</h2>
            <p className="facility-p">{props.city}</p>
        </a>
        </Link>
    )
}

export default Facility