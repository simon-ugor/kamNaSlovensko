import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hoteldomtechniky = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Dom techniky</title>
            <meta name="description" content="Hotel Dom techniky je situovaný v Žiline a naskytá sa z neho výhľad na hory. Má bezplatné Wi-Fi pripojenie na internet, spoločnú kuchyňu a 24-hodinovú recepciu."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Dom techniky</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Hotel Dom techniky je situovaný v Žiline a naskytá sa z neho výhľad na hory. Má bezplatné Wi-Fi pripojenie na internet, spoločnú kuchyňu a 24-hodinovú recepciu. Priamo na mieste máte k dispozícii bezplatné parkovisko.Všetky izby majú TV, posedenie a kúpeľňu so sprchovacím kútom.Hostia v hoteli Dom techniky môžu nakúpiť potraviny v supermarkete vzdialenom 200 metrov od hotela. Najbližšia reštaurácia sa nachádza menej než 100 metrov od hotela.K dispozícii je bazén a športová hala vo vzdialenosti 250 metrov. Hrad Budatín je vzdialený 4,8 km. Fabrika automobilov Kia Motors je vzdialená 6 km.</p>
			<a href="https://www.booking.com/hotel/sk/dom-techniky.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hoteldomtechniky