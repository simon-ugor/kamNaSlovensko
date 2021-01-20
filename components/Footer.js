import Link from "next/link"

const Footer = () => {
    return (
        <div className="main-footer-div">
            <div className="footer-div">
                <Link href="o-nas"><p className="link-footer">O nás</p></Link>
                <Link href="kontakt"><p className="link-footer">Kontakt</p></Link>
            </div>
            <div className="footer-div">
                <Link href="/blog-o-slovensku"><p className="link-footer">Blog</p></Link>
                <Link href="o-slovensku"><p className="link-footer">O Slovensku</p></Link>
            </div>
            <div className="footer-div">
                <Link href="/"><p className="link-footer">Podmineky</p></Link>
                <Link href="/"><p className="link-footer">Osobné údaje</p></Link>
            </div>
        </div>
    )
}

export default Footer