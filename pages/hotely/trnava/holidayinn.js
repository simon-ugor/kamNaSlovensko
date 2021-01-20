import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const holidayinn = () => {
	return (
		<Layout>
		<Head>
			<title>Holiday Inn</title>
            <meta name="description" content="Hotel Holiday Inn sa nachádza oproti Trnavskej univerzite, len pár metrov od katedrály sv. Jána Krstiteľa. Ponúka vám reštauráciu, 2 bary a bezplatný vstup do kúpeľov s 2 vírivkami a saunou."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Holiday Inn</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Hotel Holiday Inn sa nachádza oproti Trnavskej univerzite, len pár metrov od katedrály sv. Jána Krstiteľa. Ponúka vám reštauráciu, 2 bary a bezplatný vstup do kúpeľov s 2 vírivkami a saunou.V priestranných izbách hotela Holiday Inn Trnava môžete využívať veľké kúpeľne so sprchovacím kútom a bezplatné Wi-Fi pripojenie na internet. V najlepších izbách máte k dispozícii dennú tlač, priestrannú obývaciu izbu s rozkladacou pohovkou a TV s plochou obrazovkou.V štýlovo zariadenej reštaurácii Culinaria si vyberte z ponuky pokrmov slovenskej a medzinárodnej kuchyne a pokochajte sa výhľadom na hotelový zelený dvor. Navštívte aj 2 bary, útulný koňakový bar a štýlový lobby bar.</p>
			<a href="https://www.booking.com/hotel/sk/holiday-inn-trnava.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default holidayinn