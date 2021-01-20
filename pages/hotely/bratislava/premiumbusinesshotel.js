import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const premiumbusinesshotel = () => {
	return (
		<Layout>
		<Head>
			<title>PREMIUM Business Hotel</title>
            <meta name="description" content="PREMIUM Business Hotel Bratislava sa nachádza na tichom mieste, 5 km od Letiska Bratislava a 15 minút jazdy od historického centra Bratislavy. Ponúka ubytovanie so súkromnou kúpeľňou a k dispozícii je bezplatné Wi-Fi vo všetkých priestoroch."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">PREMIUM Business Hotel</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z bestsellerov v Bratislave. PREMIUM Business Hotel Bratislava sa nachádza na tichom mieste, 5 km od Letiska Bratislava a 15 minút jazdy od historického centra Bratislavy. Ponúka ubytovanie so súkromnou kúpeľňou a k dispozícii je bezplatné Wi-Fi vo všetkých priestoroch. Zimný štadión Ondreja Nepelu je vzdialený 500 metrov, rekreačná zóna okolo Štrkoveckého jazera je vzdialená 300 metrov a najbližšia zastávka električiek sa nachádza 200 metrov od hotela.Všetky izby v hoteli ponúkajú klimatizáciu, Smart TV, príslušenstvo na prípravu čaju, priestor na posedenie a kúpeľňu.Priamo na mieste sa podávajú raňajky formou bufetu. V závislosti od aktuálnej obsadenosti je k dispozícii parkovisko na uzavretom nádvorí. Motocykle môžete zaparkovať bezplatne.Pokrmy sa podávajú v reštaurácii Oliva, ktorá sa špecializuje na pokrmy stredomorskej kuchyne. V bare vo vstupnej hale, ktorý je otvorený počas celého dňa, si môžete objednať nápoje a malé občerstvenie. Na požiadanie vopred a za príplatok môžete navštíviť nepretržite otvorené relaxačné centrum s vírivkou, so saunami a s relaxačnými priestormi.PREMIUM Business Hotel Bratislava sa nachádza 3 minúty pešo od autobusovej zastávky Drieňová, z ktorej premávajú priame spoje na železničnú stanicu. Na električkovú zastávku so spojmi do centra mesta sa z hotela pešo dostanete za 7 minút.</p>
			<a href="https://www.booking.com/hotel/sk/premium.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default premiumbusinesshotel