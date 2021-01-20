import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const elisabetholdtown = () => {
	return (
		<Layout>
		<Head>
			<title>Elisabeth Old Town</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Bratislava. Ubytovanie Elisabeth Old Town sa nachádza v bezprostrednej blízkosti centra Bratislavy."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Elisabeth Old Town</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Bratislava. Ubytovanie Elisabeth Old Town sa nachádza v bezprostrednej blízkosti centra Bratislavy a len pár metrov od Modrého kostolíka. Dostupné je bezplatné Wi-Fi.Každá izba ponúka satelitnú TV s plochou obrazovkou, rýchlovarnú kanvicu, príslušenstvo na prípravu kávy/čaju a súkromnú kúpeľňu.Na mieste sa podávajú raňajky so sebou.Vyhliadková plošina UFO sa nachádza 1,3 km a Bratislavský hrad 1,4 km od hotela Elisabeth Old Town. Letisko Bratislava je situované vo vzdialenosti 7 km.</p>
			<a href="https://www.booking.com/hotel/sk/elisabeth-old-town.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default elisabetholdtown