import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const boutiquehotelbristol = () => {
	return (
		<Layout>
		<Head>
			<title>Boutique Hotel Bristol</title>
            <meta name="description" content="Jeden z našich favoritov v destinácii Košice. Ubytovacie zariadenie Boutique Hotel Bristol je jedným z najluxusnejších hotelov v historickom centre Košíc."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Boutique Hotel Bristol</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Jeden z našich favoritov v destinácii Košice. Ubytovacie zariadenie Boutique Hotel Bristol je jedným z najluxusnejších hotelov v historickom centre Košíc, ktorý zaujme svojou architektúrou a výhľadom na Dóm sv. Alžbety z terasy.Izby a verejné priestory sú zariadené v zemitých farebných odtieňoch. V izbách nájdete pohodlné postele a luxusné toaletné potreby značky L'Occitane.Každé ráno si hostia môžu vychutnať raňajky formou bufetu, a pri príchode dostanú poukážku na uvítací nápoj. Reštaurácia Allegro ponúka vynikajúce pokrmy miestnej a medzinárodnej kuchyne. V lobby bare sa podáva široký výber nápojov.V celej budove je k dispozícii bezplatné pripojenie na internet. Recepcia je otvorená 24 hodín denne. Hotel ponúka moderné konferenčné miestnosti.</p>
			<a href="https://www.booking.com/hotel/sk/bristol-kosice.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default boutiquehotelbristol