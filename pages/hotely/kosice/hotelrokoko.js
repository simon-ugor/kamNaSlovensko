import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelrokoko = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Rokoko</title>
            <meta name="description" content="Jeden z bestsellerov v Košiciach. Hotel Rokoko sa nachádza neďaleko centra Košíc a ponúka vám štýlové izby, vynikajúce jedlá, bezplatné Wi-Fi pripojenie na internet a bezplatné strážené parkovisko na mieste."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Rokoko</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Jeden z bestsellerov v Košiciach. Hotel Rokoko sa nachádza neďaleko centra Košíc a ponúka vám štýlové izby, vynikajúce jedlá, bezplatné Wi-Fi pripojenie na internet a bezplatné strážené parkovisko na mieste. Vo všetkých izbách nájdete antialergické matrace a vankúše, satelitnú LCD TV so 72 kanálmi (vrátane medzinárodných) a DVD prehrávačom.Súčasťou elegantnej hotelovej reštaurácie je príjemná záhradná terasa.Autobusové zastávky na Národnom námestí (linky 16, 29, 71 a 72) sa nachádzajú len 50 metrov od hotela Rokoko.</p>
			<a href="https://www.booking.com/hotel/sk/boutique-rokoko.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelrokoko