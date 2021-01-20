import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const apartmanovyhotellapension = () => {
	return (
		<Layout>
		<Head>
			<title>Apartmánový hotel La Pension</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Trnava. Apartmánový dom La Pension sa nachádza v Trnave. Ponúka ubytovanie s vlastným stravovaním."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Apartmánový hotel La Pension</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Trnava. Apartmánový dom La Pension sa nachádza v Trnave. Ponúka ubytovanie s vlastným stravovaním. Využívať môžete bezplatné Wi-Fi pripojenie na internet.V apartmánoch La Pension máte k dispozícii posedenie a káblovú TV, plne vybavenú kuchyňu s mikrovlnnou rúrou a chladničkou ako i súkromnú kúpeľňu so sprchovacím kútom.V apartmánovom dome La Pension sa nachádza bar. K dispozícii máte bezplatné parkovisko.Bratislavské letisko sa nachádza 37 km od apartmánového domu.</p>
			<a href="https://www.booking.com/hotel/sk/la-pension.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default apartmanovyhotellapension