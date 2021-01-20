import Link from "next/link"

const Footer = () => {
    return (
        <div className="main-footer-div">
            <div className="footer-div">
                <Link href="o-nas"><a className="link-footer">O nás</a></Link>
                <Link href="kontakt"><a className="link-footer">Kontakt</a></Link>
            </div>
            <div className="footer-div">
                <Link href="/blog-o-slovensku"><a className="link-footer">Blog</a></Link>
                <Link href="o-slovensku"><a className="link-footer">O Slovensku</a></Link>
            </div>
            <div className="footer-div">
                <Link href="/"><a className="link-footer">Podmineky</a></Link>
                <Link href="/"><a className="link-footer">Osobné údaje</a></Link>
            </div>
        </div>
    )
}

export default Footer