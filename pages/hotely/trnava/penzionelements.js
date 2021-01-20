import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const penzionelements = () => {
	return (
		<Layout>
		<Head>
			<title>Penzión Elements</title>
            <meta name="description" content="Jeden z bestsellerov v Trnave. Penzión Elements sa nachádza v Trnave a ponúka reštauráciu."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Penzión Elements</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Jeden z bestsellerov v Trnave. Penzión Elements sa nachádza v Trnave a ponúka reštauráciu. V klimatizovaných izbách s výhľadom na mesto je k dispozícii šatníková skriňa a bezplatné Wi-Fi.Každá izba v penzióne je vybavená písacím stolom, TV s plochou obrazovkou a má súkromnú kúpeľňu.V Penzióne Elements sa podávajú raňajky à la carte.Penzión je vzdialený 43 km od Piešťan a 45 km od Nitry. Letisko Piešťany, ktoré je k Penziónu Elements najbližšie, sa nachádza vo vzdialenosti 32 km.</p>
			<a href="https://www.booking.com/hotel/sk/penzion-elements.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default penzionelements