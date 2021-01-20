import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const holidayinn = () => {
	return (
		<Layout>
		<Head>
			<title>Holiday Inn</title>
            <meta name="description" content="Hotel Holiday Inn Žilina sa nachádza len 15 minút chôdze od historického centra Žiliny. Ponúka vám kasíno s nepretržitou prevádzkou a bezplatný vstup do strešného wellness centra s výhľadom na mesto."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Holiday Inn</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Hotel Holiday Inn Žilina sa nachádza len 15 minút chôdze od historického centra Žiliny. Ponúka vám kasíno s nepretržitou prevádzkou a bezplatný vstup do strešného wellness centra s výhľadom na mesto. Navštíviť môžete vonkajší tenisový kurt, 2 bary a ázijskú reštauráciu Gangnam.Hotel sídli v modernej 10-poschodovej budove. Všetky izby hotela Holiday Inn Žilina sú vybavené príslušenstvom na prípravu kávy/čaju a chladničkou. Vo všetkých priestoroch môžete využívať bezplatné Wi-Fi pripojenie na internet.V hotelovom wellness centre Relax nájdete 3 sauny, fitnescentrum, krytý bazén a vírivku.V štýlovom bare Aquarium si vyberte z ponuky domácich zákuskov a rôznych druhov kávy a z baru Panorama sa môžete pokochať výhľadom na panorámu mesta. Verejné parkovisko, ako aj zabezpečená garáž sú dostupné za príplatok.</p>
			<a href="https://www.booking.com/hotel/sk/holiday-inn-zilina.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default holidayinn