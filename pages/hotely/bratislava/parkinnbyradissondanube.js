import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const parkinnbyradissondanube = () => {
	return (
		<Layout>
		<Head>
			<title>Park Inn by Radisson Danube</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Bratislava. Hotel Park Inn by Radisson Danube Bratislava je úplne nové zariadenie situované v historickom centre mesta."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Park Inn by Radisson Danube</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Bratislava. Hotel Park Inn by Radisson Danube Bratislava je úplne nové zariadenie situované v historickom centre mesta v blízkosti Bratislavského hradu a pri rieke Dunaj.Vďaka dobrému dopravnému spojeniu a mnohým prepravným možnostiam sa z hotela jednoducho dostanete na blízke letiská vo Viedni alebo v Budapešti, a to bez ohľadu na to, či prichádzate ako turisti alebo za prácou.Hotel ponúka konferenčné priestory a sály na podujatia s rozlohou 471 m², ktoré možno rozdeliť na sekcie vhodné na semináre, workshopy a menšie skupinové stretnutia.V tomto modernom ubytovaní máte k dispozícii niektorú z 240 izieb. V každej z nich na vás čaká moderné vybavenie, ako je napríklad bezplatné Wi-Fi pripojenie na internet, vysokorýchlostný internet, trezor a individuálne nastaviteľná klimatizácia. Na chutné pokrmy môžete zájsť do hotelovej reštaurácie, v ktorej sa podávajú kulinárske pochúťky.</p>
			<a href="https://www.booking.com/hotel/sk/danube.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default parkinnbyradissondanube