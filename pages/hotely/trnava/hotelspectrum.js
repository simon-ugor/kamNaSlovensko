import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const hotelspectrum = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel SPECTRUM</title>
            <meta name="description" content="Hotel Spectrum sa nachádza v Trnave a ponúka vám priestranné moderne zariadené ubytovacie jednotky s bezplatným Wi-Fi pripojením na internet."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel SPECTRUM</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Hotel Spectrum sa nachádza v Trnave a ponúka vám priestranné moderne zariadené ubytovacie jednotky s bezplatným Wi-Fi pripojením na internet. Zabaviť sa môžete vďaka golfovému simulátoru a profesionálnemu stolu na snooker.Všetky izby a suity majú balkón a vyznačujú sa vzdušným interiérom. V každej ubytovacej jednotke je vám k dispozícii satelitná TV s plochou obrazovkou a kúpeľňa. Z väčšiny izieb sa môžete pokochať výhľadom na mesto.Personál klimatizovanej reštaurácie hotela Spectrum pripravuje chutné jedlá. Vybrať si môžete z týždenného menu s tradičnými pokrmami slovenskej kuchyne. Okrem toho môžete sledovať širokouhlú TV a využívať bezplatné Wi-Fi pripojenie na internet.Priamo na mieste si môžete dopriať masáže. Hotel poskytuje aj bezplatné parkovisko.Hotel Spectrum je situovaný v pešej vzdialenosti od niekoľkých trnavských športovísk, ako je klzisko, vonkajší bazén a tenisové kurty. Železničná stanica Trnava sa nachádza necelé 2 km od hotela. Do Bratislavy sa dostanete autom za 40 minút.</p>
			<a href="https://www.booking.com/hotel/sk/spectrum.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelspectrum