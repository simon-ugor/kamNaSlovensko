import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const kamelia = () => {
	return (
		<Layout>
		<Head>
			<title>Kamélia</title>
            <meta name="description" content="Penzión Kamélia sa nachádza v Žiline, 5 km od Budatínskeho hradu. Ponúka ubytovanie s reštauráciou, bezplatným súkromným parkoviskom, barom a terasou."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Kamélia</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Penzión Kamélia sa nachádza v Žiline, 5 km od Budatínskeho hradu. Ponúka ubytovanie s reštauráciou, bezplatným súkromným parkoviskom, barom a terasou. V tomto 3-hviezdičkovom hoteli je k dispozícii aj izbová služba.Izby sú vybavené šatníkovou skriňou. Súčasťou každej izby je písací stôl a TV s plochou obrazovkou.Každé ráno sa v ubytovaní podávajú raňajky formou bufetu.</p>
			<a href="https://www.booking.com/hotel/sk/penzion-kamelia-zilina.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default kamelia