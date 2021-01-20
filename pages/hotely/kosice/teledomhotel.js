import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const teledomhotel = () => {
	return (
		<Layout>
		<Head>
			<title>TeleDom Hotel</title>
            <meta name="description" content="Jeden z bestsellerov v Košiciach. Hotel TeleDom sa nachádza v centre mesta Košice, iba 200 metrov od Dómu svätej Alžbety."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">TeleDom Hotel</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Jeden z bestsellerov v Košiciach. Hotel TeleDom sa nachádza v centre mesta Košice, iba 200 metrov od Dómu svätej Alžbety. Ponúka bezplatné pripojenie na internet vo všetkých izbách.Hostia hotela TeleDom si môžu vychutnať raňajkový bufet v hotelovej reštaurácii, v ktorej sa podávajú i pokrmy medzinárodnej kuchyne a miestne špeciality.Všetky pohodlne zariadené izby sú vybavené minibarom a satelitnou TV. V každej modernej kúpeľni sa nachádza sušič vlasov. Hostia si môžu vybrať medzi ubytovaním vo fajčiarskej a nefajčiarskej izbe.Celý hotel je bezbariérový.Hotel TeleDom sa nachádza v blízkosti mnohých pamiatok, medzi ktoré patrí i Mestský park. Košická železničná stanica je vzdialená 2 km.</p>
			<a href="https://www.booking.com/hotel/sk/teledom-conference-center.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default teledomhotel