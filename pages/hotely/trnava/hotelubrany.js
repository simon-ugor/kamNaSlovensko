import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelubrany = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel u Brány</title>
            <meta name="description" content="Hotel u Brány sa nachádza v Trnave a ponúka reštauráciu a bezplatné Wi-Fi. Súčasťou každej izby je balkón."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel u Brány</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Hotel u Brány sa nachádza v Trnave a ponúka reštauráciu a bezplatné Wi-Fi. Súčasťou každej izby je balkón. V ubytovaní podávajú raňajky formou bufetu.Bratislava je vzdialená 45 km a Piešťany 28 km od ubytovania. Najbližšie letisko je Letisko Piešťany, ktoré sa nachádza 32 km od Hotela u Brány.</p>
			<a href="https://www.booking.com/hotel/sk/u-brany.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelubrany