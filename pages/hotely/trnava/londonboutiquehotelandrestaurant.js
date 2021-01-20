import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const londonboutiquehotelandrestaurant = () => {
	return (
		<Layout>
		<Head>
			<title>LONDON Boutique Hotel and Restaurant</title>
            <meta name="description" content="LONDON Boutique hotel and Restaurant sa nachádza v Trnave a ponúka reštauráciu, bar a terasu."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">LONDON Boutique Hotel and Restaurant</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">LONDON Boutique hotel and Restaurant sa nachádza v Trnave a ponúka reštauráciu, bar a terasu. V tomto trojhviezdičkovom hoteli je dostupné bezplatné Wi-Fi.Ubytovacie jednotky v hoteli sú vybavené TV s plochou obrazovkou.Každé ráno sa hoteli podávajú raňajky formou bufetu.Bratislava sa nachádza 44 km od hotela a Piešťany sú vzdialené 29 km. Letisko Piešťany je vzdialené 33 km.</p>
			<a href="https://www.booking.com/hotel/sk/london-boutique-amp-restaurant.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default londonboutiquehotelandrestaurant