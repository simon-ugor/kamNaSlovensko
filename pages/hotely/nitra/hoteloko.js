import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hoteloko = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Oko</title>
            <meta name="description" content="Hotel Oko sa nachádza v srdci historickej Nitry, 100 m od pešej zóny a v blízkosti viacerých turistických atrakcií, ako je katedrála sv. Emerána."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Oko</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Hotel Oko sa nachádza v srdci historickej Nitry, 100 m od pešej zóny a v blízkosti viacerých turistických atrakcií, ako je katedrála sv. Emerána. Hosťom ponúka bezplatné Wi-Fi pripojenie na internet a bezplatné súkromné parkovisko.Všetky klimatizované izby majú drevené podlahy a nábytok z tmavého dreva. Vybavenie zahŕňa LCD TV a minibar. Vo verejných priestoroch hotela si môžte zahrať biliard.Hotel je súčasťou komplexu Oko Centrum, kde nájdete reštauráciu, pivovar, kaderníctvo a nechtové štúdio. Reštaurácia Oko s terasou, ponúka široký výber jedál tradičnej slovenskej aj medzinárodnej kuchyne.Divadlo Andreja Bagara je 100 metrov od hotela a Nitriansky hrad je vzdialený 500 metrov. Nitrianske kongresové centrum je vzdialené 300 metrov. Najbližšie nákupné centrum je 80 metrov od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/oko.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hoteloko