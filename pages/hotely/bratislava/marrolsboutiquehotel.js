import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const marrolsboutiquehotel = () => {
	return (
		<Layout>
		<Head>
			<title>Marrol's Boutique Hotel</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Bratislava. Päťhviezdičkový Marrol's Boutique Hotel sa nachádza v centre Bratislavy, v pešej vzdialenosti od historického Starého Mesta."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Marrol's Boutique Hotel</h2>
			<h2 className="onas-subheading">Bratislava</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Bratislava. Päťhviezdičkový Marrol's Boutique Hotel sa nachádza v centre Bratislavy, v pešej vzdialenosti od historického Starého Mesta. Parkovanie je zabezpečené v podzemnej garáži monitorovanej kamerovým systémom. Vo všetkých priestoroch hotela je dostupné bezplatné Wi-Fi.Marrol's Boutique Hotel ponúka 54 klimatizovaných izieb, ktoré sú zariadené a vybavené pre maximálne pohodlie a dokonalý zážitok, či už cestujete služobne alebo za oddychom. Všetky izby a ďalšie priestory hotela sú prísne nefajčiarske. Bezplatne je tu k dispozícii príslušenstvo na prípravu kávy/čaju, SMART TV a trezor na laptop.Do wellness centra Jasmine SPA má povolený vstup len osoba, ktorá si ho rezervovala, a jej hostia. Maximálna kapacita wellness centra je 6 osôb a minimálny pobyt je 2 hodiny. Vyžaduje sa rezervácia vopred a jeho dostupnosť závisí od aktuálnej obsadenosti. Cena za pobyt vo wellness centre Jasmine SPA nie je zahrnutá v cene ubytovania a účtuje sa podľa hotelového cenníka.Hotelová reštaurácia HOUDINI ponúka výdatné raňajky formou bufetu, obedové menu a jedlá à la carte (výber z jedálneho lístka).V zime si môžete oddýchnuť vo vstupnej hale s kozubom a v lete na terase. Pri príchode dostanete bezplatný nápoj na privítanie.Marrol's Boutique Hotel sa nachádza 5 minút chôdze od Staromestskej radnice, Dómu sv. Martina a dunajského nábrežia. Bratislavský hrad je od hotela vzdialený 1 km, Michalská brána 700 metrov a Prezidentský palác len 1 km. Zimný štadión Ondreja Nepelu stojí 3 km odtiaľto a od výstaviska Incheba vás budú deliť 2 km.</p>
			<a href="https://www.booking.com/hotel/sk/marrol-s.sk.html?label=gen173nr-1FCAMozQE48ANIIlgEaM0BiAEBmAEiuAEHyAEM2AEB6AEB-AECiAIBqAIDuAK1642ABsACAdICJDkxNTEzMDM5LWRkMzYtNDNhMy1iYzc3LWZkZWRmMzQ2OGI4MNgCBeACAQ;sid=96efd82228721fc373b86f43e76e5ff3" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default marrolsboutiquehotel