import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const kongreshotelroca = () => {
	return (
		<Layout>
		<Head>
			<title>Kongres Hotel Roca</title>
            <meta name="description" content="Tento 3-hviezdičkový hotel sa nachádza v hlavnej obchodnej štvrti v Košiciach. Ponúka pokrmy medzinárodnej kuchyne, klimatizované izby s bezplatným Wi-Fi pripojením na internet a recepciu s nepretržitou prevádzkou."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Kongres Hotel Roca</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Tento 3-hviezdičkový hotel sa nachádza v hlavnej obchodnej štvrti v Košiciach. Ponúka pokrmy medzinárodnej kuchyne, klimatizované izby s bezplatným Wi-Fi pripojením na internet a recepciu s nepretržitou prevádzkou. Na mieste je k dispozícii súkromné parkovisko.Štýlové izby a suity nefajčiarskeho hotela Kongres Roca majú TV s plochou obrazovkou, pracovný stôl a trezor. Ich súčasťou je aj moderná mramorová kúpeľňa.V elegantnej reštaurácii hotela Roca sa podávajú sezónne pokrmy. Každé ráno je tu pre vás pripravený kompletný raňajkový bufet. Lobby bar je otvorený nepretržite.Historické centrum Košíc je od hotela Roca vzdialené 1,5 km. Personál recepcie vám na požiadanie zabezpečí transfery kyvadlovou dopravou.</p>
			<a href="https://www.booking.com/hotel/sk/roca.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default kongreshotelroca