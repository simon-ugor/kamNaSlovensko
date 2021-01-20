import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelslovan = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Slovan</title>
            <meta name="description" content="Hotel Slovan sa nachádza v centre Žiliny, len 100 metrov od Hlavného námestia. V hotelovej reštaurácii si pochutíte na jedlách slovenskej kuchyne."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Slovan</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Hotel Slovan sa nachádza v centre Žiliny, len 100 metrov od Hlavného námestia. V hotelovej reštaurácii si pochutíte na jedlách slovenskej kuchyne. V celom objekte máte k dispozícii bezplatné Wi-Fi pripojenie na internet.Hotel sa nachádza v pokojnej lokalite, len 50 metrov od parku. Všetky izby majú TV a vlastnú kúpeľňu so sprchovým kútom.V bare hotela Slovan s nepretržitou prevádzkou si môžete vychutnať teplé a studené nápoje. a môžete si tu vybrať z rôznych teplých a studených nápojov.Na zastávku miestnych autobusov prídete po 50 metroch. Hlavná železničná a autobusová stanica sú vzdialené necelých 800 metrov. Na požiadanie vám hotel ponúka službu transferu medzi hotelom a letiskami v Krakove, Schwechate, Budapešti alebo Bratislave za znížené ceny.</p>
			<a href="https://www.booking.com/hotel/sk/slovan-a1-2ilina.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelslovan