import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const daysbandb = () => {
	return (
		<Layout>
			<Head>
				<title>7Days B and B</title>
                <meta name="description" content="7Days B and B je jeden z našich favoritov v destinácii Bratislava. Ubytovacie zariadenie 7Days B&B sa nachádza v Bratislave, 1,3 km od Michalskej brány."></meta>
			</Head>
			<div className="onas-div">
				<h2 className="onas-heading">7Days B and B</h2>
				<h2 className="onas-subheading">Bratislava</h2>
				<p className="onas-p">Jeden z našich favoritov v destinácii Bratislava. Ubytovacie zariadenie 7Days B and B sa nachádza v Bratislave, 1,3 km od Michalskej brány a ponúka ubytovanie s reštauráciou, súkromným parkoviskom a barom. Všetky ubytovacie jednotky v tomto 3-hviezdičkovom hoteli majú bezplatné Wi-Fi a výhľad na mesto. V hoteli sa nachádza aj snack bar, v ktorom si môžu hostia vychutnať nápoje.Všetky izby majú priestor na posedenie, káblovú TV s plochou obrazovkou a súkromnú kúpeľňu so sušičom vlasov a sprchovacím kútom. K vybaveniu všetkých ubytovacích jednotiek patrí písací stôl a rýchlovarná kanvica.V ubytovaní 7Days B&B sa podávajú kontinentálne raňajky alebo raňajky formou bufetu.Bratislavský hrad je od ubytovania vzdialený 1,3 km a výstavisko Incheba 3,7 km. Letisko Bratislava, ktoré je kubytovaniu najbližšie, je vzdialené 7 km. Letiskový transfer je k dispozícii za poplatok.</p>
				<a href="https://www.booking.com/hotel/sk/dont-panic.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default daysbandb