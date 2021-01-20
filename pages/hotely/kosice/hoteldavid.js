import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hoteldavid = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel David</title>
            <meta name="description" content="Hotel Dávid sa nachádza v Košiciach, len pár krokov od jazera. Ponúka ubytovanie v izbách a suitách, recepciu s nepretržitou prevádzkou a bezplatné Wi-Fi pripojenie na internet v celom hoteli."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel David</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Hotel Dávid sa nachádza v Košiciach, len pár krokov od jazera. Ponúka ubytovanie v izbách a suitách, recepciu s nepretržitou prevádzkou a bezplatné Wi-Fi pripojenie na internet v celom hoteli. Priamo na mieste môžete zdarma parkovať na súkromnom parkovisku.Všetky izby a suity v hoteli Dávid sú vybavené chladničkou a TV s plochou obrazovkou. Ich súčasťou je i súkromná kúpeľňa so sprchovacím kútom.V hotelovej reštaurácii Gladiátor sa podávajú rôzne jedlá, vrátane pokrmov arménskej kuchyne. V letnom období môžete stolovať na terase.Na mieste nájdete tiež detské ihrisko a konferenčné priestory. Tenisový kurt je k dispozícii za príplatok.V okolí sa môžete venovať rôznym aktivitám, napríklad cyklistike a pešej turistike.</p>
			<a href="https://www.booking.com/hotel/sk/david-kosice.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hoteldavid