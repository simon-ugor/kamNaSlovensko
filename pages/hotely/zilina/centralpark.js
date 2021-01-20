import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const centralpark = () => {
	return (
		<Layout>
		<Head>
			<title>Central Park</title>
            <meta name="description" content="Jeden z bestsellerov v Žiline. Penzión Central Park situovaný v centre Žiliny má vlastné wellness centrum s krytým bazénom, parným kúpeľom a fínskou saunou."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Central Park</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Jeden z bestsellerov v Žiline. Penzión Central Park situovaný v centre Žiliny má vlastné wellness centrum s krytým bazénom, parným kúpeľom a fínskou saunou. Všetky klimatizované izby penziónu majú vlastnú kúpeľňu, satelitnú LCD TV a k dispozícii vám je bezplatné Wi-Fi pripojenie na internet.V reštaurácii penziónu sa podávajú pokrmy slovenskej a českej kuchyne, ako aj medzinárodné špeciality. K dispozícii vám je aj salónik s otvoreným kozubom, zimná záhrada s podlahovým kúrením a detské ihrisko.Zo žilinskej železničnej stanice, ktorá je od penziónu vzdialená len 5 minút chôdze, premáva priamy vlak do Bratislavy. Žilinské letisko s pravidelnými odletmi do Prahy a späť sa nachádza len 4,5 km od penziónu.</p>
			<a href="https://www.booking.com/hotel/sk/penzioncentralpark.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default centralpark