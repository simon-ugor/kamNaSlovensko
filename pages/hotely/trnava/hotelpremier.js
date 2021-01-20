import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelpremier = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Premier</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Trnava. Hotel Premier sa nachádza v pokojnej časti centra Trnavy, hneď vedľa synagógy a len 200 metrov od Trojičného námestia."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Premier</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Trnava. Hotel Premier sa nachádza v pokojnej časti centra Trnavy, hneď vedľa synagógy a len 200 metrov od Trojičného námestia. Okrem ubytovania ponúka aj kaviareň s terasou, recepciu s nepretržitou prevádzkou a bezplatné parkovisko. V celej budove môžete zadarmo využívať Wi-Fi pripojenie na internet.Všetky ubytovacie jednotky hotela Premier sú vybavené káblovou TV, rádiom, telefónom, chladničkou a písacím stolom. Súčasťou každej je kúpeľňa so sprchovacím kútom alebo s vaňou a bezplatnými toaletnými potrebami. Suita má aj obývaciu izbu, kozub a terasu.Nákupné centrum City Arena je vzdialené do 300 metrov a vodný park Relax Aqua a Spa je vzdialený do do 7-minút chôdze.Autobusová i železničná stanica sa nachádzajú vo vzdialenosti 1,5 km. Cesta autom z hotela do Bratislavy vám potrvá 30 minút a Letisko M. R. Štefánika je vzdialené 37 km.</p>
			<a href="https://www.booking.com/hotel/sk/premier.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelpremier