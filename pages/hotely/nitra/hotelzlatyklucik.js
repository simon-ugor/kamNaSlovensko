import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelzlatyklucik = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Zlatý Kľúčik</title>
            <meta name="description" content="Hotel Zlatý Kľúčik sa nachádza v Nitre, na vrchu Zobor so sviežou zeleňou. Patrí medzi najlepšie hotely na Slovensku."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Zlatý Kľúčik</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Hotel Zlatý Kľúčik sa nachádza v Nitre, na vrchu Zobor so sviežou zeleňou. Patrí medzi najlepšie hotely na Slovensku. Hostia môžu bezplatne navštíviť wellness centrum.Vybrať si môžu z pekne zariadených izieb a suít. V každej klimatizovanej ubytovacej jednotke je k dispozícii satelitná TV a bezplatné bezdrôtové pripojenie na internet.V reštaurácii hotela Zlatý Kľúčik si hostia môžu vychutnať vynikajúce jedlá slovenskej a medzinárodnej kuchyne a relaxovať na príjemnej letnej terase s nádherným výhľadom na mesto.Moderné pracovné a konferenčné priestory sú dostupné na súkromné aj firemné akcie.</p>
			<a href="https://www.booking.com/hotel/sk/zlaty-klucik.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelzlatyklucik