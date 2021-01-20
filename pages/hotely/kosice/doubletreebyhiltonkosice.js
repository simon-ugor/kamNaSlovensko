import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const doubletreebyhiltonkosice = () => {
	return (
		<Layout>
		<Head>
			<title>DoubleTree By Hilton</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Košice. Hotel Doubletree by Hilton Košice sa nachádza na hlavnej ulici v srdci historického centra mesta a je prvým hotelom Hilton na Slovensku."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">DoubleTree By Hilton</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Košice. Hotel Doubletree by Hilton Košice sa nachádza na hlavnej ulici v srdci historického centra mesta a je prvým hotelom Hilton na Slovensku. Ponúka ubytovanie v štýlových klimatizovaných izbách a bezplatný vstup do moderného wellness centra so saunou, vírivkou a fitness zariadeniami.Všetky vkusne zariadené izby majú súkromnú kúpeľňu (priamo v izbe) a sú vybavené TV s plochou obrazovkou a minibarom. V elegantnej kúpeľni môžete využívať toaletné potreby zdarma, ako aj sušič vlasov. Wi-Fi je k dispozícii za príplatok.V hoteli Doubletree by Hilton nájdete tiež biznis centrum so zasadacími miestnosťami, vybavenými bezplatným vysokorýchlostným pripojením na internet a podpornými službami pre spoločnosti, 24-hodinovú recepciu a službu concierge, ktorá vám ochotne poskytne informácie o najlepších reštauráciách, zaujímavostiach či podujatiach v Košiciach.</p>
			<a href="https://www.booking.com/hotel/sk/doubletree-by-hilton.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default doubletreebyhiltonkosice