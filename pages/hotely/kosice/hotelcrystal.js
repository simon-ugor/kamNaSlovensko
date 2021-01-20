import Head from "next/head"
import Link from "next/link"
import Layout from "../../../components/Layout"

const hotelcrystal = () => {
	return (
		<Layout>
		<Head>
			<title>Hotel Crystal</title>
            <meta name="description" content="Hotel Crystal sa nachádza v Košiciach, 1,9 km od Dómu sv. Alžbety a 3,6 km od Steel Arény. Ponúka bar, bezplatné Wi-Fi vo všetkých priestoroch a bezplatné súkromné parkovisko pre hostí, ktorí prídu autom."></meta>
		</Head>
		<div className="facilities-div">
			<h2 className="onas-heading">Hotel Crystal</h2>
			<h2 className="onas-subheading">Košice</h2>
			<p className="onas-p">Hotel Crystal sa nachádza v Košiciach, 1,9 km od Dómu sv. Alžbety a 3,6 km od Steel Arény. Ponúka bar, bezplatné Wi-Fi vo všetkých priestoroch a bezplatné súkromné parkovisko pre hostí, ktorí prídu autom. Dom umenia, Hrnčiarska ulica a Spoločenský pavilón sú od ubytovania vzdialené približne 2,2 km. Ubytovanie má k dispozícii recepciu s nepretržitou prevádzkou, službu organizácie výletov a predaj vstupeniek.Všetky izby sú vybavené káblovou TV s plochou obrazovkou, chladničkou, sprchovacím kútom, sušičom na vlasy a písacím stolom. V izbách nájdete šatníkovú skriňu a súkromnú kúpeľňu.V ubytovaní sa podávajú raňajky formou bufetu alebo americké raňajky.Bankov je od ubytovania vzdialený 6 km a Múzeum letectva Košice sa nachádza vo vzdialenosti 1,8 km. Medzinárodné letisko Košice, ktoré je k ubytovaniu najbližšie, je vzdialené 8 km.</p>
			<a href="https://www.booking.com/hotel/sk/crystal.sk.html?label=gen173nr-1FCAMozQFCBmtvc2ljZUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4Arf9koAGwAIB0gIkNmNmOTU4ZWItNGFkNi00MjRmLWIyN2YtOTA5NWRlMDZmMTg32AIF4AIB;sid=9d82710d9fab48c280083806e890fc5a" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default hotelcrystal