import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvKosiciach = () => {
	return (
		<Layout>
            <Head>
                <title>Najlepšie hotely v Košiciach</title>
                <meta name="description" content="Ak je cesta do Košíc súčasť Vašich plánov, prečítajte si tento článok a dozviete sa základné informácie o Košiciach a aké sú najlepšie hotely v Košiciach."></meta>
            </Head>
			<div className="facilities-div">
				<h2 className="onas-heading">Najlepšie hotely v Košiciach</h2>
				<p className="onas-p">Plánujete cestu do Koších a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Košiciach. Poskytujeme výber tých najlepších hotelov v Košiciach, stačí kliknúť</p>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">sem</p></Link>
				<h2 className="onas-heading">O Košiciach</h2>
				<p className="onas-p">Košice sú mesto na východnom Slovensku. S približne 240 000 obyvateľmi sú druhým najľudnatejším mestom na Slovensku, preto sa nazývajú aj metropolou východného Slovenska. V roku 2013 sa Košice stali Európskym hlavným mestom kultúry a od roku 2016 nesú titul Európske mesto športu. Toto mesto sa určite oplatí navštíviť, Košice sú centrom celého východného Slovenska a sídlom regionálnej samosprávy Košického samosprávneho kraja. Sú významným centrom politického, hospodárskeho, kultúrneho a cirkevného života. Ak plánujete cestu do Košíc, netreba zabúdať, že mesto je strediskom významných kultúrnych inštitúcií s celoslovenskou a regionálnou pôsobnosťou. Patria sem napríklad Štátne divadlo Košice, Štátna filharmónia Košice, Slovenské technické múzeum, Východoslovenské múzeum a tak ďalej. 75% obyvateľov tvoria Slováci, 2,8% Maďari, 1,98% Rómovia a zvyšok ostatné národnostné menšiny. 46% obyvateľov sa prihlásilo k rímskokatolíckej cirkvi. V roku 1983 bolo historické centrum mesta vyhlásené za mestskú pamiatkovú rezerváciu, ktorá je zároveň tou najväčšou na Slovensku. o všetkých slovenských pamiatkových rezervácií eviduje aj najviac pamiatkovo chránených objektov, ktorých je 501. Nachádza sa tu taktiež mnoho pamätníkov, z ktorých sú najznámejšie Pamätník maratónu mieru, Pamätník neznámeho protifašistického bojovníka a Pamätník vojakov Sovietskej armády na Námestí osloboditeľov. Košice sú taktiež významným turistickým centrom, v roku 2018 tu bolo ubytovaných až 386 088 turistov. Za najväčšiu atrakciu Košíc sa považuje ich samotné historické jadro. Na Hlavnom námestí v strede tohto jadra sa nachádza známa Spievajúca fontána. V rokoch 2008 a 2009 sa uskutočnila anketa medzi obyvateľmi Košíc o siedmich divoch Košíc. Víťazom sa stal najväčší kostol na Slovensku, Dóm svätej Alžbety, ktorého stavba bola ukončená v Košiciach v roku 1508. Košice sú taktiež známe možnosťami večernej zábavy či už sa jedná o vystúpenia známych domácich, ale aj zahraničných interpretov v Steel Aréne alebo o pestrú klubovú scénu s trendovými barmi.</p>
				<p className="onas-p">Ak by ste si radi pozreli mapu Košíc, nájdete ju kliknutím</p>
				<a href="https://www.google.sk/maps/place/Ko%C5%A1ice/@48.6975566,21.0991087,11z/data=!3m1!4b1!4m5!3m4!1s0x473ee01b67c6957b:0x400f7d1c6978bd0!8m2!3d48.7163857!4d21.2610746" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
				<p className="onas-p">Košice určite stojí za to vidieť, tak neváhajte, vyberte si ten správny hotel a spokojne vycestujte na či už pracovnú alebo rekreačnú cestu.</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvKosiciach