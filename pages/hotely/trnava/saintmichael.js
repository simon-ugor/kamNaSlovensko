import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const saintmichael = () => {
	return (
		<Layout>
		<Head>
			<title>Saint Michael</title>
            <meta name="description" content="Ubytovacie zariadenie Saint Michael sa nachádza v Trnave a má bar. V hoteli máte k dispozícii bezplatné Wi-Fi a bezplatné súkromné parkovisko."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Saint Michael</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Ubytovacie zariadenie Saint Michael sa nachádza v Trnave a má bar. V hoteli máte k dispozícii bezplatné Wi-Fi a bezplatné súkromné parkovisko. Všetky izby v hoteli majú klimatizáciu, káblovú TV s plochou obrazovkou, DVD prehrávač a súkromnú kúpeľňu s vaňou alebo so sprchovacím kútom, sušičom na vlasy a s bezplatnými toaletnými potrebami. Vo všetkých izbách sa nachádza písací stôl a rýchlovarná kanvica.Každé ráno sa v hoteli podávajú kontinentálne raňajky alebo raňajky formou bufetu.Piešťany sa nachádzajú 43 km od hotela a Senec je vzdialený 30 km. Letisko Piešťany, ktoré je k ubytovaniu Saint Michael najbližšie, je situované vo vzdialenosti 32 km. Letiskový transfer je k dispozícii za príplatok.</p>
			<a href="https://www.booking.com/hotel/sk/saint-michael.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default saintmichael