import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelambassador = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Ambassador</title>
            <meta name="description" content="Jeden z bestsellerov v Košiciach. Rodinný hotel Ambassador sa nachádza priamo v historickom centre Košíc. Ponúka štýlovú reštauráciu, trendovú kaviareň a wellness centrum."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Ambassador</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Jeden z bestsellerov v Košiciach. Rodinný hotel Ambassador sa nachádza priamo v historickom centre Košíc. Ponúka štýlovú reštauráciu, trendovú kaviareň a wellness centrum. K dispozícii je vám bezplatné Wi-Fi.Všetky izby sú moderné a klimatizované. Nájdete v nich satelitnú TV.K dispozícii sú vám aj zasadacie a konferenčné priestory.Hoteloví hostia môžu v reštaurácii využiť 10 % zľavu.</p>
			<a href="https://www.booking.com/hotel/sk/ambassador.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelambassador