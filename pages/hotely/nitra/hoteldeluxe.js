import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hoteldeluxe = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Deluxe</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Nitra. Tento štýlový 4-hviezdičkový hotel Deluxe sa nachádza v centre Nitry a ponúka café bar s letnou terasou."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Deluxe</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Nitra. Tento štýlový 4-hviezdičkový hotel Deluxe sa nachádza v centre Nitry a ponúka café bar s letnou terasou. Bezplatnú saunu, parný kúpeľ, vírivku a klimatizovanú posilňovňu nájdete v partnerskom hoteli vzdialenom 10 minút pešo.V celej budove môžete využívať bezplatné Wi-Fi pripojenie na internet.Všetky elegantne zariadené izby sú zariadené moderným nábytkom a vybavené klimatizáciou. K dispozícii máte aj satelitnú TV a minibar. Každá ubytovacia jednotka má tiež vlastnú kúpeľňu so sprchovacím kútom alebo vaňou a sušičom vlasov. K niektorým izbám patrí aj balkón.Svoj deň môžete začať raňajkami formou bufetu a pritom si prečítať medzinárodné i domáce noviny. Hotel tiež ponúka bezbariérový prístup a bezplatné verejné parkovisko strážené videokamerami (24 hodín denne).Hotel Deluxe stojí 500 metrov od nitrianskej pešej zóny. Pešo sa jednoducho dostanete k mnohým reštauráciám, kaviarňam a tiež obchodom a butikom. Areál výstaviska Agrokomplex je vzdialený 1 km a prírodná rezervácia Zobor 2 km.Najbližšia autobusová zastávka sa nachádza 80 metrov a hlavná železničná a autobusová stanica 500 metrov od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/deluxe.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hoteldeluxe