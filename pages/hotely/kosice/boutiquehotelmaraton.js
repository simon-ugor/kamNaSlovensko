import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const boutiquehotelmaraton = () => {
	return (
		<Layout>
		<Head>
			<title>Boutique Hotel Maraton</title>
            <meta name="description" content="Elegantný boutique hotel Maraton sa nachádza v centre Košíc, len kúsok od historického centra a všetkých hlavných pamiatok. Hostia tu môžu využiť bezplatný vstup do wellness a fitnescentra."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Boutique Hotel Maraton</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Elegantný boutique hotel Maraton sa nachádza v centre Košíc, len kúsok od historického centra a všetkých hlavných pamiatok. Hostia tu môžu využiť bezplatný vstup do wellness a fitnescentra. Izby v boutique hoteli Maraton sú vkusne zariadené a ladené do teplých farebných odtieňov. Hosťom zaručujú vysoký štandard ubytovania a služieb. V celej budove hotela máte k dispozícii Wi-Fi pripojenie na internet zadarmo.V reštaurácii, do ktorej môžete zájsť aj na denné menu, sa podávajú lahodné pokrmy miestnej a medzinárodnej kuchyne. Jedlá dopĺňa bohatá ponuka nápojov. Každé ráno sa tu podáva výdatný raňajkový bufet.K ďalšiemu hotelovému zázemiu patrí bezplatné parkovisko strážené kamerovým systémom, moderné konferenčné miestnosti a recepcia s nepretržitou prevádzkou.Boutique hotel Maraton patrí medzi najluxusnejšie 4-hviezdičkové hotely vo východoslovenskej metropole.</p>
			<a href="https://www.booking.com/hotel/sk/boutique-maraton.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default boutiquehotelmaraton