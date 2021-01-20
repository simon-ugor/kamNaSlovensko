import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelcapitalwithprivatewellness = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Capital</title>
            <meta name="description" content="Hotel Capital sa nachádza v centre Nitry a k dispozícii máte ubytovanie v klimatizovaných izbách a suitách zariadených v rustikálnom štýle."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Capital</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Hotel Capital sa nachádza v centre Nitry a k dispozícii máte ubytovanie v klimatizovaných izbách a suitách zariadených v rustikálnom štýle. Využívať môžete wellness centrum s bazénom, vírivkou, fínskou saunou a masážami.Všetky ubytovacie jednotky v hoteli Capital sú nefajčiarske, vybavené bezplatným Wi-Fi a majú súkromnú kúpeľňu so sprchovacím kútom alebo vaňou. Za príplatok sú k dispozícii služby práčovne a žehliace potreby.V reštaurácii na mieste podávajú jedlá tradičnej talianskej a medzinárodnej kuchyne. Využiť môžete aj zľavu vo výške 10 % na jedlá v reštaurácii.Na mieste môžete zdarma parkovať na súkromnom parkovisku.</p>
			<a href="https://www.booking.com/hotel/sk/capital.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelcapitalwithprivatewellness