import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelmaxplaza = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel MAXPLAZA</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Trnava. Hotel MAXPLAZA sa nachádza v centre Trnavy, 400 metrov od katedrály Jána Krstiteľa a 450 metrov od Trojičného námestia."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel MAXPLAZA</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Trnava. Hotel MAXPLAZA sa nachádza v centre Trnavy, 400 metrov od katedrály Jána Krstiteľa a 450 metrov od Trojičného námestia. V hotelovej reštaurácii sa podávajú jedlá kórejskej, japonskej a slovenskej kuchyne. K dispozícii je bezplatné WiFi.Všetky ubytovacie jednotky sú klimatizované. Súčasťou ich vybavenia je satelitná TV s plochou obrazovkou a platenými kanálmi, minibar a chladnička. V kúpeľni s vaňou alebo sprchovacím kútom je k dispozícii sušič vlasov, župany, papuče a toaletné potreby zdarma. V apartmáne sa takisto nachádza kuchynka a jedálenský kút.Hotelový bar a recepcia sú otvorené 24 hodín denne. Hostia môžu využiť konferenčné priestory, zľavy na masáže a služby organizácie výletov.Na mieste je možné využívať bezplatné parkovisko. Letisko Bratislava je vzdialené 82 km od ubytovania.</p>
			<a href="https://www.booking.com/hotel/sk/max-plaza.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelmaxplaza