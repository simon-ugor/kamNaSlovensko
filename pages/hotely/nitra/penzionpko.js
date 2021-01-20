import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const penzionpko = () => {
	return (
		<Layout>
		<Head>
			<title>Penzion PKO</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Nitra. Penzión PKO Nitra sa nachádza v pokojnej lokalite vedľa mestského parku v meste Nitra."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Penzion PKO</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Nitra. Penzión PKO Nitra sa nachádza v pokojnej lokalite vedľa mestského parku v meste Nitra. Okrem vlastnej reštaurácie a baru ponúka izby s TV. K dispozícii je bezplatné Wi-Fi.Reštaurácia penziónu PKO Nitra je zariadená drevenými stropmi a dreveným nábytkom v tradičnom štýle. Vychutnať si tu môžete jedlá slovenskej kuchyne a výber teplých a studených nápojov.Penzión je situovaný len 300 metrov od nitrianskeho hradu a ponúka vám izby s vlasnou kúpeľňou. V každej jednotke sa nachádza dlažba a chladnička.Necelých 300 metrov od penziónu sa môžete prejsť po pešej zóne, kde sa nachádzajú bary, kaviarne, reštaurácie a Divadlo Andreja Bagara. Na mieste nájdete bezplatné verejné parkovisko.</p>
			<a href="https://www.booking.com/hotel/sk/penzion-pko-nitra.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default penzionpko