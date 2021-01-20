import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvBratislave = () => {
	return (
		<Layout>
            <Head>
                <title>Najlepšie hotely v Bratislave</title>
                <meta name="description" content="Ak je cesta do Bratislavy súčasť Vašich plánov, prečítajte si tento článok a dozviete sa základné informácie o Bratislava a aké sú najlepšie hotely v Bratislave."></meta>
            </Head>
			<div className="onas-div">
				<h2 className="onas-heading">Najlepšie hotely v Bratislave</h2>
				<p className="onas-p">Plánujete cestu do Bratislavy a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Bratislave. Poskytujeme výber tých najlepších hotelov v Bratislave, stačí kliknúť</p>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">sem</p></Link>
				<h2 className="onas-heading">O Bratislave</h2>
				<p className="onas-p">Pred cestou do hlavného mesta Slovenska, by Vás mohli zaujímať základné informácie o Bratislave. Ako už bolo spomenuté, Bratislava je hlavné mesto Slovenska. Taktiež je to rozlohou i počtom obyvateľov najväčšie slovenské mesto. Rozloha Bratislavy je 367,66 km2 a žije tu približne 437 725 obyvateľov. Mestom preteká rieka Dunaj, najhrubšia a najvodnatejšia rieka Slovenska. Mimo centra preteká aj rieka Morava. Je sídlom prezidenta, parlamentu i vlády; samosprávneho kraja, vznikajúceho Európskeho orgánu práce, niekoľkých miestnych centrál medzinárodných organizácií, ako aj viacerých divadiel, múzeí, galérií, univerzít a ďalších inštitúcií. Dominantou mesta je známy Bratislavský hrad a spomedzi moderných stavieb je najvýraznejší Most SNP na rieke Dunaj. Mesto sa delí na 5 okresov a tie spolu na 17 mestských častí. Z hľadiska rozlohy sú najväčšou mestskou časťou Podunajské Biskupice. Až 90% obyvateľstva je slovenskej národnosti. Ostatné národnosti tvorí maďarská, rusínska, ukrajinská, česká a iné národnosti. Jednou z najdôležitejších firiem v Bratislave je automobilka Volkswagen. Doprava v Bratislave je zabezpečovaná rozsiahlou infraštruktúrou mestskej a diaľkovej dopravy. Bratislava ako hlavné mesto Slovenska je významným dopravným uzlom. Nachádza sa tu taktiež viacero železničných staníc, z ktorých je najväčšia Hlavná stanica. Cez mesto prechádzajú diaľnice D1, D2 a D4. Na okraji mesta je medzinárodné Letisko Milana Rastislava Štefánika. V Bratislave má sídlo niekoľko múzeí, galérií, divadiel, vedeckých a vzdelávacích inštitúcii, preto sa aj považuje za kultúrne centrum Slovenska. V Bratislave taktiež možno nájsť veľké množstvo pamiatok a kostolov.</p>
				<p className="onas-p">Ak by ste si radi pozreli mapu Bratislavy, nájdete ju kliknutím</p>
				<a href="https://www.google.com/maps/place/Bratislava/@48.1359244,16.9758332,11z/data=!3m1!4b1!4m5!3m4!1s0x476c89360aca6197:0x631f9b82fd884368!8m2!3d48.1485965!4d17.1077478" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
				<p className="onas-p">Bratislavu určite stojí za to vidieť, tak neváhajte, vyberte si ten správny hotel a spokojne vycestujte na či už pracovnú alebo rekreačnú cestu.</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvBratislave