import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelslovakia = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Slovakia</title>
            <meta name="description" content="Hotel Slovakia sa nachádza priamo v historickom centre Žiliny, pár krokov od Mariánskeho námestia. Ponúka aj herňu."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Slovakia</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Hotel Slovakia sa nachádza priamo v historickom centre Žiliny, pár krokov od Mariánskeho námestia. Ponúka aj herňu. Veľká konferenčná sála je k dispozícii za príplatok a bezdrôtové pripojenie na internet je dostupné vo všetkých priestoroch.Hotel Slovakia je vzdialený 20 metrov od nákupného a zábavného centra Aupark.</p>
			<a href="https://www.booking.com/hotel/sk/slovakia.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelslovakia