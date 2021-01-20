import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const lofthotel = () => {
	return (
		<Layout>
		<Head>
			<title>LOFT Hotel</title>
            <meta name="description" content="Jeden z bestsellerov v Bratislave. Novootvorený 4-hviezdičkový hotel LOFT Bratislava sa nachádza v centre Bratislavy."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">LOFT Hotel</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z bestsellerov v Bratislave. Novootvorený 4-hviezdičkový hotel LOFT Bratislava sa nachádza v centre Bratislavy, v pešej vzdialenosti od historického Starého Mesta, a ponúka atraktívny výhľad do záhrady prezidentského paláca. Parkovať môžete vo veľkej podzemnej garáži a bezplatné Wi-Fi pripojenie na internet máte k dispozícii v celom hoteli.Všetkých 111 klimatizovaných izieb bolo navrhnutých a vybavených tak, aby ponúkali maximálny komfort a vytvorili dokonalý zážitok, či už ste na pracovnej ceste alebo na dovolenke. Bezplatne máte k dispozícii kávu a čaj, denne doplňovaný minibar, LCD TV s bezplatnými medzinárodnými programami a bezpečnostnú schránku veľkosti laptopu.Hotelová reštaurácia Fabrika The Beer Pub ponúka bohatý raňajkový bufet, obedové menu a a la carte menu. Café bar a vínny bar s letnou terasou ponúka čapované pivo, taliansku kávu, miestne i medzinárodné vína, kokteily, nápoje a široký výber whisky.Prezidentský palác sa nachádza iba 300 metrov od hotela. Bratislavský hrad je vzdialený 1,5 km, Michalská brána 850 metrov a Katedrála sv. Martina 1,3 km. Pobrežie Dunaja je vo vzdialenosti 1,5 km a Hlavná stanica Bratislava sa nachádza 850 metrov od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/loft-hotel-bratislava.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default lofthotel