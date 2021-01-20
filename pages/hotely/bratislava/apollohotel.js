import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const apollohotel = () => {
	return (
		<Layout>
		<Head>
			<title>Apollo Hotel</title>
            <meta name="description" content="Jeden z bestsellerov v Bratislave. Hotel Apollo sa nachádza medzi Starým Mestom a bratislavskou obchodnou štvrťou."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading"> Apollo Hotel </h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z bestsellerov v Bratislave. Hotel Apollo sa nachádza medzi Starým Mestom a bratislavskou obchodnou štvrťou, 1,5 km od novej budovy Slovenského národného divadla. Ponúka vám gurmánsku reštauráciu. Všetky izby boli zrenovované v rokoch 2016, 2017 a 2018 a sú vybavené bezplatným Wi-Fi pripojením na internet. Do nákupného centra Eurovea a k Dunaju sa pešo dostanete za 15 minút.Všetky izby sú klimatizované a vybavené satelitnou TV s medzinárodnými a prémiovými programami, minibarom a k dispozícii máte aj bezplatnú vodu vo fľašiach a príslušenstvo na prípravu čaju a kávy. Platené TV programy môžete sledovať bezplatne. Platené súkromné parkovanie je možné priamo pred hotelom.V lobby bare a na letnej terase si môžete vybrať z bohatej ponuky špeciálnych druhov kávy a miešaných nápojov. Reštaurácia St. Hubert je známa svojou medzinárodnou kuchyňou a tradičnými špecialitami z diviny.Relaxovať môžete v hotelovej soľnej jaskyni a fitnescentre, do ktorých máte bezplatný prístup. Za príplatok môžete navštíviť fínsku saunu.Hotel je ľahko dostupný zo všetkých diaľnic. Do centra mesta sa dostanete trolejbusom za 10 minút alebo pešo za 20 minút. Autobusová stanica Mlynské Nivy je vzdialená 800 metrov, hlavná železničná stanica 2,5 km. Letisko M. R. Štefánika Bratislava je situované vo vzdialenosti 8 km a letisko Viedeň 50 km.</p>
			<a href="https://www.booking.com/hotel/sk/dukla.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default apollohotel