import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const boutiquehotel11 = () => {
	return (
		<Layout>
		<Head>
			<title>Boutique HOTEL 11</title>
            <meta name="description" content="Jeden z bestsellerov v Nitre. Boutique Hotel 11 má výhodnú polohu v historickom centre Nitry a ponúka recepciu s nepretržitou prevádzkou a terasu s výhľadom mesto a Nitriansky hrad."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Boutique HOTEL 11</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Jeden z bestsellerov v Nitre. Boutique Hotel 11 má výhodnú polohu v historickom centre Nitry a ponúka recepciu s nepretržitou prevádzkou a terasu s výhľadom mesto a Nitriansky hrad. Každá izba poskytuje TV s plochou obrazovkou, pracovný stôl, bezplatné Wi-Fi pripojenie na internet a kúpeľňu. Niektoré suity majú tiež vaňu a pohovku.Navštíviť môžete priestranný lobby bar, salónik s ponukou cigár a terasu s panoramatickým výhľadom na mesto.V jedálni sa podáva raňajkový bufet.Boutique HOTEL 11 sa nachádza len 50 metrov od centra mesta a 600 metrov od Nitrianskeho hradu. Najbližšia reštaurácia je vzdialená 200 metrov.</p>
			<a href="https://www.booking.com/hotel/sk/evis.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default boutiquehotel11