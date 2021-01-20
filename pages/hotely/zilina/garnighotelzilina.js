import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const garnighotelzilina = () => {
	return (
		<Layout>
		<Head>
			<title>Garni G Hotel</title>
            <meta name="description" content="Garni G Hotel Žilina sa nachádza na okraji Žiliny. Najbližšia autobusová zastávka sa nachádza 200 metrov od hotela a centrum mesta je vzdialené 3,5 km."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Garni G Hotel</h2>
			<h2 className="onas-subheading">Žilina</h2>
			<p className="onas-p">Garni G Hotel Žilina sa nachádza na okraji Žiliny. Najbližšia autobusová zastávka sa nachádza 200 metrov od hotela a centrum mesta je vzdialené 3,5 km. Miestny futbalový štadión je vzdialený 2,4 km. V celom hoteli môžete využívať bezplatné Wi-Fi pripojenie.Každá z priestranných izieb v Garni G Hotel Žilina má vlastnú kúpeľňu a TV. Väčšina izieb ponúka aj priestor na posedenie. Všetky izby sú zariadené moderne a prakticky svetlým dreveným nábytkom.Raňajky formou bufetu si môžete vychutnať v bare. K dispozícii sú aj banketové priestory. Hotel ponúka súkromné parkovisko.Žilinské letisko je situované 14,2 km od hotela.</p>
			<a href="https://www.booking.com/hotel/sk/dorastav.sk.html?label=gen173nr-1FCAMozQFCBnppbGluYUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Apr7k4AGwAIB0gIkZmU4OGIzMDAtNzhjZS00YjJhLWFiNmUtODE0NDg4ZDQ5MzI02AIF4AIB;sid=42e14f580b825fb37cce286651ba04b1" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default garnighotelzilina