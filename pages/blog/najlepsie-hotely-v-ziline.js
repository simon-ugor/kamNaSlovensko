import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvZiline = () => {
	return (
		<Layout>
            <Head>
                <title>Najlepšie hotely v Žiline</title>
                <meta name="description" content="Plánujete cestu do Žiliny? Prečítajte si tento článok a dozviete sa základné informácie o Žiline a aké sú najlepšie hotely v Žiline."></meta>
            </Head>
			<div className="facilities-div">
				<h2 className="onas-heading">Najlepšie hotely v Žiline</h2>
				<p className="onas-p">Plánujete cestu do Žiliny a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Žiline. Poskytujeme výber tých najlepších hotelov v Žiline, stačí kliknúť</p>
				<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">sem</p></Link>
				<h2 className="onas-heading">O Žiline</h2>
				<p className="onas-p">Žilina je mesto na severnom Slovensku. Je to krajské a okresné mesto ležiace na sútoku riek Váh, Kysuca a Rajčanka. Žilina má približne 83 000 obyvateľov, čo ju robí štvrtým najväčším mestom na Slovensku. Je administratívnym, hospodárskym, dopravným a kultúrnym centrom severozápadného Slovenska. Ak teda plánujete cestu do Žiliny, čo by ste určite mali vidieť? V Žiline sa nachádza až 17 námestí. Medzi najznámejšie patria Námestie A. Hlinku a Mariánske námestie. Obidve sú súčasťou pešej zóny v historickom centre mesta a bývajú dejiskom dôležitých mestských kultúrno-spoločenských akcií. Určite taktiež netreba vynechať množstvo pamiatok, ktoré sa v Žiline nachádzajú. Najznámejšie sú Lietavský hrad, Budatínsky hrad či Rosenfeldov palác. V Žiline si taktiež môžete vychutnať divadlá, knižnice, múzeá a galérie. Nachádza sa tu aj veľké množstvo pomníkov a sôch ako napríklad Socha sv. Cyrila a Metoda na balustráde nad Hlinkovým námestím, socha Andreja Hlinku, socha Antona Bernoláka alebo pamätník Jozefa Gabčíka. Nebudú Vám tu chýbať ani parky a široká ponuka športovísk určených na rôzne športy ako napríklad futbal či hokej. Erb mesta pozostáva zo štítu, dvojkríža a dvoch hviezd na olivovozelenom podklade. Vlajka mesta je vodorovne rozdelená na horný žltý a dolný zelený pruh. Vľavo hore je umiestnený erb mesta. Pečať mesta je kruhová. V strede je erb so štítom a dvojkrížom.</p>
				<p className="onas-p">Ak by ste si radi pozreli mapu Žiliny, nájdete ju kliknutím</p>
				<a href="https://www.google.com/maps/place/%C5%BDilina/@49.220257,18.6782902,12z/data=!3m1!4b1!4m5!3m4!1s0x47145ea4e72cf5bd:0xe9a4e40ac6c36a0a!8m2!3d49.2194498!4d18.7408001" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
				<p className="onas-p">Žilinu si určite stojí za to pozrieť a som si istý že výlet do tohto krásneho mesta nebudete ľutovať. Či už ide o pracovnú cestu alebo voľnočasový výlet, nájdite si na našej stránke perfektný hotel priamo v Žiline.</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvZiline