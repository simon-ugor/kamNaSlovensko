import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelcomfort = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Comfort</title>
            <meta name="description" content="Tento 4-hviezdičkový hotel sa nachádza v centre Nitry a ponúka bezplatný vstup do vírivky a rôznych sáun, vrátane suchej a infračervenej sauny."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Comfort</h2>
			<h2 className="onas-subheading">Nitra</h2>
			<p className="onas-p">Tento 4-hviezdičkový hotel sa nachádza v centre Nitry a ponúka bezplatný vstup do vírivky a rôznych sáun, vrátane suchej a infračervenej sauny. Hostia majú možnosť stravovať sa v hotelovej reštaurácii a zacvičiť si vo fitnescentre, ktoré je tiež zadarmo.Izby v hoteli Comfort majú interiér v modernom štýle a sú vybavené bezplatným Wi-Fi pripojením na internet. Sú zariadené v jemných farebných odtieňoch, v každej je LCD TV a niektoré majú vlastný balkón s výhľadom na mesto.Raňajky formou bufetu sa podávajú každé ráno v hotelovej kaviarni Café Comfort alebo na terase. Kým ochutnáte tradičné slovenské jedlá v reštaurácii, môžete relaxovať v piano bare.Na mieste je k dispozícii bezplatné súkromné parkovisko nepretržite monitorované kamerovým systémom hotela. Výstavisko Agrokomplex je vzdialené 1 km. K pamätihodnostiam mesta patrí Piaristický kostol za hotelom a Divadlo Andreja Bagara vzdialené 500 metrov od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/comfort.sk.html?label=gen173nr-1FCAMozQFCBW5pdHJhSCJYBGjNAYgBAZgBIrgBB8gBDNgBAegBAfgBAogCAagCA7gChvaSgAbAAgHSAiQyN2I0ZGZhZC1mZDRjLTQ0Y2UtYjBkYy1jMTBhMTZjYmIzZDPYAgXgAgE;sid=8a5f95cea0a8012c46fd4e7b3d88cb2a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelcomfort