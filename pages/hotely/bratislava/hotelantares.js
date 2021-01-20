import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelantares = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Antares</title>
            <meta name="description" content="Jeden z bestsellerov v Bratislave. Hotel Antares sa nachádza v pokojnej rezidenčnej štvrti Bratislavy, 10 minút pešo od Starého Mesta."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Antares</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z bestsellerov v Bratislave. Hotel Antares sa nachádza v pokojnej rezidenčnej štvrti Bratislavy, 10 minút pešo od Starého Mesta. Ponúka vám Wi-Fi pripojenie na internet, vírivku, saunu, záhradu a garáž.Všetky klimatizované izby sú moderne zariadené a vybavené satelitnou TV a minibarom. K dispozícii je vám moderná súkromná kúpeľňa so sušičom vlasov a toaletnými potrebami.Na požiadanie a za príplatok si môžete objednať stravovanie.Relaxujte v zariadenej záhrade alebo si zašportujte vo fitnescentre.</p>
			<a href="https://www.booking.com/hotel/sk/antares.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelantares