import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelgrand = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Grand</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Žilina. Hotel Grand sa nachádza v pešej zóne priamo v historickom centre Žiliny."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Grand</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Žilina. Hotel Grand sa nachádza v pešej zóne priamo v historickom centre Žiliny. Ponúka moderné wellness centrum a bezplatné Wi-Fi pripojenie na internet v celom hoteli.Všetky izby majú vlastnú kúpeľňu a káblovú TV. Niektoré sú vybavené vírivkou a klimatizáciou.Reštaurácia pripravuje slovenské špeciality i jedlá medzinárodnej kuchyne. Kaviareň na prízemí ponúka široký sortiment nápojov.V okolí hotela Grand nájdete množstvo obchodíkov, reštaurácií, kaviarní a barov s terasami.</p>
			<a href="https://www.booking.com/hotel/sk/grand-zilina.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelgrand