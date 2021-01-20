import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const pensionpetit = () => {
	return (
		<Layout>
		<Head>
			<title>Pension Petit</title>
            <meta name="description" content="Jeden z bestsellerov v Bratislave. Penzión Petit sa nachádza v centre Bratislavy, vedľa Prezidentského paláca a 300 metrov od Michalskej brány v Starom Meste."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Pension Petit</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z bestsellerov v Bratislave. Penzión Petit sa nachádza v centre Bratislavy, vedľa Prezidentského paláca a 300 metrov od Michalskej brány v Starom Meste. Nájdete v ňom kaviareň s barom LePetit a bezplatné Wi-Fi pripojenie na internet v kaviarni a vo vstupnej hale.Každá ubytovacia jednotka má súkromnú kúpeľňu, rýchlovarnú kanvicu a káblovú TV. Uteráky a posteľná bielizeň sú k dispozícii.K Bratislavskému hradu, Dunaju a všetkým ďalším turistickým zaujímavostiam sa dostanete pešo.Verejnou dopravou sa do penziónu Petit dostanete z hlavnej bratislavskej stanice a z autobusovej stanice Mlynské Nivy za 10 minút.Parkovanie je k dispozícii 200 metrov od penziónu. Na požiadanie a za príplatok vám penzión zabezpečí parkovacie miesto.</p>
			<a href="https://www.booking.com/hotel/sk/petit.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default pensionpetit