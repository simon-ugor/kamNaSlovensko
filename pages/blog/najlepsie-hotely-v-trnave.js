import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvTrnave = () => {
	return (
		<Layout>
            <Head>
                <title>Najlepšie hotely v Trnava</title>
                <meta name="description" content="Plánujete cestu do Trnavy? Prečítajte si náš článok a dozviete sa základné informácie o Trnave a aké sú najlepšie hotely v Trnave."></meta>
            </Head>
			<div className="facilities-div">
				<h2 className="onas-heading">Najlepšie hotely v Trnave</h2>
				<p className="onas-p">Plánujete cestu do Trnavy a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Trnave. Poskytujeme výber tých najlepších hotelov v Trnave, stačí kliknúť</p>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">sem</p></Link>
				<h2 className="onas-heading">O Trnave</h2>
				<p className="onas-p">Pred tým ako vycestujete do Trnavy by Vás mohli zaujímať základné informácie o tomto meste. Trnava je krajské mesto na západe Slovenska, má približne 65 000 obyvateľov a rozlohu 71,54 km2. Primátor mesta je Peter Bročka. Stojí tu množstvo kostolov, preto dostala Trnava prezývku „Malý Rím“ alebo aj „Slovenský Rím“. Výhodou je poloha len 45 km od Bratislavy, hlavného mesta Slovenska. Trnava leží na riečke Trnávka, v centre Trnavskej pahorkatiny. V Trnave určite stojí za to navštíviť mestskú vežu, radnicu, barokový komplex budov Trnavskej univerzity, trnavské kostoly vďaka ktorým dostala prívlastok Malý Rím, Trnavské tehlové opevnenie ako aj pomník Antona Bernoláka. Okrem pamiatok sa tu nachádza aj množstvo príjemných barov a kaviarní v centre mesta na Trojičnom námestí ako mimo centra mesta v príjemných uličkách. Najznámejší športový klub v Trnave je futbalový klub FC Spartak Trnava, ako aj mnoho ďalších športových klubov pre priaznivcov športových aktivít ako basketbal, hokej, atletika, plávanie, volejbal, florbal, tenis a mnoho ďalších. Doprava v Trnave je zabezpečená rozsiahlou cestnou, železničnou, cyklistickou i pešou infraštruktúrou. Trnava bola prvým mestom na Slovensku ktoré v roku 1988 odstránilo motorizovanú dopravu v centre mesta. Taktiež sa tu dnes nachádza viac ako 20 kilometrov mestských cyklotrás pre zabezpečenie bezpečnej cyklistickej dopravy. V roku 2019 bol taktiež v meste umiestnený prvý poschodový stojan na bicykle v uliciach slovenských miest. Nachádza sa pri budove mestského úradu na Trhovej ulici. Služby mestskej hromadnej dopravy sú poskytované na 10 štandardných autobusových linkách a 3 školských linkách, pričom premávka štandardných autobusových liniek funguje každý deň približne od 4:30 do 23:00.</p>
				<p className="onas-p">Ak by ste si radi pozreli mapu Trnavy, nájdete ju kliknutím</p>
				<a href="https://www.google.com/maps/place/Trnava/@48.3746219,17.5034285,12z/data=!3m1!4b1!4m5!3m4!1s0x476ca062e63dcacd:0x400f7d1c696fab0!8m2!3d48.3709108!4d17.5833218" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
				<p className="onas-p">Trnavu si určite stojí za to pozrieť a som si istý že výlet do tohto krásneho mesta nebudete ľutovať. Či už ide o pracovnú cestu alebo voľnočasový výlet, nájdite si na našej stránke perfektný hotel priamo v Trnave</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvTrnave