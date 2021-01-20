import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const sporthotelborik = () => {
	return (
		<Layout>
		<Head>
			<title>Šport Hotel Bôrik</title>
            <meta name="description" content="V rodinou prevádzkovanom hoteli Šport Bôrik sú vám k dispozícii kúpeľné centrum s vírivkou, sauna, masáže, bar, reštaurácia a ubytovanie v izbách s bezplatným Wi-Fi pripojením na internet a káblovou TV."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Šport Hotel Bôrik</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">V rodinou prevádzkovanom hoteli Šport Bôrik sú vám k dispozícii kúpeľné centrum s vírivkou, sauna, masáže, bar, reštaurácia a ubytovanie v izbách s bezplatným Wi-Fi pripojením na internet a káblovou TV. Medzi športové zariadenia patria 4 squashové kurty a volejbalová hala.V hotelovom Slender Centre si môžete vybrať z ponuky procedúr na formovanie postavy. Blízky park Bôrik je ideálny na beh alebo prechádzky.Vo všetkých hotelových izbách sa nachádza časť s posedením. V niektorých izbách je vlastná kúpeľňa so sprchovacím kútom, v iných vstup do spoločnej kúpeľne a oddelených toaliet pre dámy a pánov.V reštaurácii si môžete vychutnať pokrmy slovenskej a medzinárodnej kuchyne a grilované špeciality. V letných mesiacoch môžete stolovať na terase.Na mieste môžete využiť bezplatné parkovisko. Centrum Žiliny, autobusová a železničná stanica sú vzdialené 1,5 km. Hrad Strečno sa nachádza 7 km od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/a-port-ba-rik.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default sporthotelborik