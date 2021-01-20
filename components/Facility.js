
import Link from "next/link"

const Facility = (props) => {
    return (
        <Link href={props.link}>
        <div className="facility-main-div">
            <h2 className="facility-heading">{props.heading}</h2>
            <p className="facility-p">{props.city}</p>
        </div>
        </Link>
    )
}

export default Facility