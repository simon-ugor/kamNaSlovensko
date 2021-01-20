import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvNitre = () => {
	return (
		<Layout>
            <Head>
                <title>Najlepšie hotely v Nitre</title>
                <meta name="description" content="Je cesta do Nitry súčasť Vašich plánov? prečítajte si tento článok a dozviete sa základné informácie o Nitre a aké sú najlepšie hotely v Nitre."></meta>
            </Head>
			<div className="onas-div">
				<h2 className="onas-heading">Najlepšie hotely v Nitre</h2>
				<p className="onas-p">Plánujete cestu do Nitry a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Nitre. Poskytujeme výber tých najlepších hotelov v Nitre, stačí kliknúť</p>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">sem</p></Link>
				<h2 className="onas-heading">O Nitre</h2>
				<p className="onas-p">Mesto Nitra leží v Nitrianskom kraji a je vzdialene približne 70 kilometrov od hlavného mesta Slovenska, Bratislavy. Nitrou preteká rovnako nazvaná rieka Nitra. Panorámu Nitry tvorí Sedem pahorkov: zo severnej strany sa týči vrch Zobor, Hradná skala, Vŕšok, Kalvária, Borina, Ľupka, spolu s Martinským vrchom. Vznik Nitry nie je presne datovaný, prvé historické záznamy o tomto meste sú z roku 828. Podľa počtu obyvateľov je Nitra šiestym najväčším mestom na Slovensku po Bratislave, Košiciach, Prešove, Žiline a Banskej Bystrici. Obyvateľstvo Nitry tvorí až 95% Slovákov a 74% obyvateľov má rímskokatolícke vierovyznanie. Takže pokiaľ cestujete do Nitry, čo určite stojí za to vidieť? Najznámejšou kultúrnou pamiatkou mesta je Nitriansky hrad, dominanta mesta. Hradný komplex pozostáva z katedrály, biskupského paláca, fortifikačných hradieb a hospodárskych budov. Nachádza sa tu taktiež veľké množstvo archeologických lokalít ako aj kostolov a farností. Určite Vám tu nebudú chýbať ani galérie (ART Galéria, Malá galéria AKCENT, Nitrianska galéria, Výstavná sieň Jána Plesníka), knižnice (Krajská knižnica Karola Kmeťku, Univerzitná knižnica UKF v Nitre atď.), divadlá (Divadlo Andreja Bagara, Staré divadlo Karola Spišáka), múzeá (Diecézne múzeum, Misijné múzeum atď.) a kiná (CINE-MAX Nitra a Mlyny Cinemas). Taktiež sa tu každoročne uskutoční množstvo rozličných podujatí. V Nitre nájdete veľké množstvo športových klubov a športovísk pre priaznivcov športov ako napríklad hokej, futbal, tenis či golf. Doprava v Nitre je organizovaná formou železničnej, cestnej, cyklistickej a mestskej hromadnej dopravy. Nachádza sa tu aj letisko s regionálny významom.</p>
				<p className="onas-p">Ak by ste si radi pozreli mapu Nitry, nájdete ju kliknutím</p>
				<a href="https://www.google.sk/maps/place/Nitra/@48.3125969,18.0182661,12z/data=!3m1!4b1!4m5!3m4!1s0x476b3ee0556593fd:0x400f7d1c6978bf0!8m2!3d48.3061414!4d18.076376" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
				<p className="onas-p">Nitru určite stojí za to vidieť, tak neváhajte, vyberte si ten správny hotel a spokojne vycestujte na či už pracovnú alebo rekreačnú cestu.</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvNitre