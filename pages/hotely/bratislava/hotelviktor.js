import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelviktor = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Viktor</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Bratislava. Tento hotel je vzdialený jeden kilometer od železničnej stanice Petržalka a 3 km od centra Bratislavy."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Viktor</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Bratislava. Tento hotel je vzdialený jeden kilometer od železničnej stanice Petržalka a 3 km od centra Bratislavy. Ponúka vám klimatizované izby so satelitnou LCD TV, trezorom a súkromnou kúpeľňou.Priestranné a farebne zariadené izby hotela Viktor majú prístup na čipovú kartu a karty možno použiť aj na platenie v reštaurácii. Každé ráno sú pre vás pripravené raňajky.Hotel Viktor je vzdialený 11 km od Letiska M. R. Štefánika v Bratislave.</p>
			<a href="https://www.booking.com/hotel/sk/viktor.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelviktor