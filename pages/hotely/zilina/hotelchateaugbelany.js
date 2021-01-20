import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelchateaugbelany = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Château Gbeľany</title>
            <meta name="description" content="Hotel Château Gbeľany sa nachádza v obci Gbeľany v Žilinskom kraji, 3,5 km od hradu Strečno. Má k dispozícii gril a vírivku."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Château Gbeľany</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Hotel Château Gbeľany sa nachádza v obci Gbeľany v Žilinskom kraji, 3,5 km od hradu Strečno. Má k dispozícii gril a vírivku. Priamo na mieste môžete navštíviť reštauráciu. Na mieste môžete využívať aj bezplatné súkromné parkovisko.Všetky izby majú TV s plochou obrazovkou a varnú kanvicu. Vo všetkých izbách je k dispozícii súkromná kúpeľňa. K ďalšiemu vybaveniu patria župany, papuče a bezplatné toaletné potreby. K dispozícii je bezplatné Wi-Fi pripojenie na internet v celom objekte.Recepcia ubytovacieho zariadenia je otvorená 24 hodín denne.V okolí sa môžete venovať rôznym aktivitám, napríklad lyžovaniu a cyklistike. Mesto Žilina je vzdialené 10 minút jazdy autom a do obce Terchová sa dostanete autom za 15 minút.</p>
			<a href="https://www.booking.com/hotel/sk/chateau-gbelany.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelchateaugbelany