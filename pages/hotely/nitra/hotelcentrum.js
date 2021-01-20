import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelcentrum = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Centrum</title>
            <meta name="description" content="Hotel Centrum sa nachádza priamo v srdci Nitry a ponúka krásny výhľad na historické centrum mesta, hrad, divadlo a pešiu zónu."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Centrum</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Hotel Centrum sa nachádza priamo v srdci Nitry a ponúka krásny výhľad na historické centrum mesta, hrad, divadlo a pešiu zónu. V celom hoteli je dostupné bezplatné Wi-Fi. Pri príchode dostanú hostia nápoj na privítanie.Všetky izby majú vlastnú kúpeľňu so sprchovacím kútom alebo vaňou. K ich vybaveniu patrí klimatizácia, satelitná TV a minibar.V ubytovaní sa podávajú bezplatné raňajky formou bufetu a k dispozícii je aj bar. Okrem toho Hotel Centrum ponúka nabíjaciu stanicu pre elektromobily a bezplatné strážené parkovisko.</p>
			<a href="https://www.booking.com/hotel/sk/centrum.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelcentrum