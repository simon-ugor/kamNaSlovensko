import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const abchotel = () => {
	return (
		<Layout>
		<Head>
			<title>ABC Hotel</title>
            <meta name="description" content="Hotel Abc sa nachádza na okraji Nitry, 7 minút jazdy autom od centra mesta. Ponúka vám ubytovanie v izbách, reštauráciu, bar, záhradu, terasu a bezplatné súkromné parkovisko."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">ABC Hotel</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Hotel Abc sa nachádza na okraji Nitry, 7 minút jazdy autom od centra mesta. Ponúka vám ubytovanie v izbách, reštauráciu, bar, záhradu, terasu a bezplatné súkromné parkovisko priamo na mieste. V celom hoteli môžete využívať bezplatné Wi-Fi pripojenie na internet.V každej izbe hotela Abc je vám k dispozícii balkón, TV a súkromná alebo spoločná kúpeľňa. Uteráky a posteľná bielizeň sú zahrnuté v cene ubytovania.V reštaurácii na mieste si vychutnajte pokrmy tradičnej slovenskej a medzinárodnej kuchyne. Personál vám v prípade záujmu pripraví obedové balíčky a zabezpečí izbovú službu.Recepcia je otvorená nepretržite. Vlastné pokrmy si môžete pripraviť na grile. Hotel poskytuje službu predaja vstupeniek. Za príplatok si môžete zahrať biliard, šípky, stolný tenis alebo relaxovať počas masáže.V okolí navštívte Nitriansky hrad vzdialený 4,5 km alebo kostol v Dražovciach vzdialený 10,8 km. Na Mostnej ulici situovanej vo vzdialenosti 4 km nájdete množstvo reštaurácií a barov.</p>
			<a href="https://www.booking.com/hotel/sk/abc-nitra-slovakia.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default abchotel