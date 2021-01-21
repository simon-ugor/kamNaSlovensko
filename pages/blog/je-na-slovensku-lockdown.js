import Link from "next/link"
import Layout from "../../components/Layout"
import Head from "next/head"

const najlepsieHotelyvBratislave = () => {
	return (
		<Layout>
            <Head>
                <title>Je na Slovensku lockdown?</title>
                <meta name="description" content="Je na Slovensku lockdown? Zistite ako prebieha COVID-19 na Slovensku, pozrite si prehľad zákazov, trvanie lockdown-u a ako funguje COVID AUTOMAT."></meta>
            </Head>
			<div className="facilities-div">
				<h2 className="onas-heading">Lockdown na Slovensku</h2>
				<p className="onas-p">Počiatočne rozhodnutie vládne znelo, že lockdown na Slovensku bude od 19. decembra do 10. januára. Vláda však na mimoriadnej online schôdzi rozhodla o zrušení niektorých výnimiek. Obyvatelia Slovenska už nebudú môcť vychádzať na rodinné návštevy a taktiež sa predĺži pôvodný lockdown. Najnovšie opatrenia platia od 1.1.2021 od 5:00 ráno najmenej do 24. januára 2021. Zákaz vychádzania platný do 24. januára sa však zmenil na 26. januára a platnosť nových pravidiel začína opäť od 27. januára 2021. Od 18. januára sa občania môžu priebežne testovať a od 27. januára bude potrebné mať so sebou certifikát s negatívnym výsledkom na COVID-19 (RT-PCR alebo antigénový test) aj na cestu do práce, prírody či za účelom doplnenia pohonných hmôt. Podľa aktuálnych informácii majú tieto pravidlá platiť až do 7. februára 2021. Jednoducho povedané, vláda sa opäť rozhodla predĺžiť lockdown a taktiež sprísniť opatrenia.</p>
                <h2 className="onas-heading">Čo je zakázané počas lockdown-u?</h2>
                <p className="onas-p">Zakázané sú návštevy medzi domácnosťami, zatvorené budú aj kostoly. Zatvárajú sa aj lyžiarske strediská a hotely. Vláda schválila aj zákaz pohybu medzi okresmi. Minister zdravotníctva Marek Krajčí vyhlásil: „Nestretávajme sa s nikým okrem osôb v spoločnej domácnosti“. Ako už bolo spomenuté, od 18. januára sa občania môžu priebežne testovať a od 27. januára bude potrebné nosiť negatívny test na COVID-19 aj na cestu do práce, prírody (neplatí pre mládež do 15 rokov a seniorov nad 65 rokov) a za účelom doplnenia pohonných hmôt. Testovanie je dobrovoľné a potrvá do 26. januára 2021, myslite však na to že od 27. januára sa bez platného negatívneho COVID-19 testu nedostanete prakticky nikam. Od 7. februára je v pláne prejsť na tzv. COVID AUTOMAT.</p>
                <h2 className="onas-heading">Čo je COVID AUTOMAT?</h2>
                <p className="onas-p">Covid automat alebo Covid semafor, je monitorovací a signalizačný systém vytvorený Ministerstvom zdravotníctva Slovenskej republiky, ktorý slúži na predvídateľné nastavovanie opatrení počas pandémie ochorenia COVID-19. Pomocou tohto automatu bude ministerstvo informovať o aktuálnej epidemiologickej situácii na Slovensku a podľa toho uvoľňovať alebo sprísňovať opatrenia. Automat má 2 stupne – regionálny a celonárodný</p>
				<Link href="/blog-o-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
			</div>
		</Layout>
	)
}

export default najlepsieHotelyvBratislave