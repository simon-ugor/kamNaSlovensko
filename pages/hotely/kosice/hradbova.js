import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hradbova = () => {
	return (
		<Layout>
		<Head>
			<title>Hradbová</title>
            <meta name="description" content="Penzión Hradbová sa nachádza v historicky najstaršej časti kráľovského mesta Košice. Ponúka moderne zariadené wellness centrum a očarujúcu záhradu."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hradbová</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Penzión Hradbová sa nachádza v historicky najstaršej časti kráľovského mesta Košice. Ponúka moderne zariadené wellness centrum a očarujúcu záhradu. Vo wellness centre nájdete vírivku, fínsku a parnú saunu i suchú reflexnú zónu. Ideálnym miestom na oddych je aj park s jazierkom.V každej ubytovacej jednotke penziónu Hradbová môžete využívať chladničku, rýchlovarnú kanvicu a príslušenstvo na prípravu kávy a čaju. Na požiadanie máte k dispozícii mikrovlnnú rúru.Ráno je pre vás v kaviarni pripravený raňajkový bufet. V kaviarni si okrem raňajok môžete vychutnať široký sortiment rôznych druhov káv, ako aj miešaných alkoholických a nealkoholických nápojov.</p>
			<a href="https://www.booking.com/hotel/sk/penzion-hradbova.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hradbova