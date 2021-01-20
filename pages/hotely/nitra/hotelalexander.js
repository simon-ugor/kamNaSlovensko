import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelalexander = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Alexander's</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Nitra. Exkluzívny hotel Alexander's sa nachádza v jedinečnej lokalite nitrianskeho podhradia v historickom centre Nitry."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Hotel Alexander's</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Nitra. Exkluzívny hotel Alexander's sa nachádza v jedinečnej lokalite nitrianskeho podhradia v historickom centre Nitry. Ponúka vám ubytovacie jednotky s vlastnou kúpeľňou a reštauráciu, v ktorej si každý deň môžete vychutnať pokrmy pripravené z čerstvých surovín.Klimatizované izby a suity zariadené v orientálnom štýle sú ideálnym miestom na váš relax po náročnom dni strávenom v tomto rušnom meste, ktoré je historicky druhým najstarším mestom na Slovensku. Vo všetkých izbách môžete využívať bezplatné vysokorýchlostné pripojenie na internet.Tento moderný elegantne zariadený hotel vás presvedčí spojením komfortu a vysokokvalitných služieb. Počas pobytu relaxujte v bare na mieste alebo v kasíne. Z terasy sa môžete pokochať výhľadom.Do divadla Andreja Bagara, k Nitrianskemu hradu a do parku prídete za 5 minút. Na Mostnej ulici vzdialenej len pár metrov nájdete množstvo obchodov, barov a reštaurácií. Románsky kostol v obci Dražovce je od Nitry vzdialený 5,9 km a Vráble sa nachádzajú vo vzdialenosti 20 km.</p>
			<a href="https://www.booking.com/hotel/sk/alexander-s.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelalexander