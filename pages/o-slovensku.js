import Layout from "../components/Layout"
import Head from "next/head"

const oSlovensku = () => {
    return (
        <Layout>
            <Head>
               <title>Základné informácie o Slovensku</title>
               <meta name="description" content="Zaujímate sa o dovolenku na Slovensku? Slovensko určite stojí za to vidieť. Je to nádherná a pri tom málo známa krajina. Či už máte chuť na zimnú lyžovačku, príjemnú turistiku alebo jednoducho oddych, Slovensko je určite tá správna voľba."></meta>
            </Head>
            <div className="onas-div">
                <h2 className="onas-heading">O Slovensku</h2>
                <p className="onas-p">
                    Slovensko určite stojí za to vidieť. Je to nádherná a pri tom málo známa krajina. Či už máte chuť na zimnú lyžovačku, príjemnú turistiku alebo jednoducho oddych, Slovensko je určite tá správna voľba. Objavte málo objavenú destináciu v srdci Európy. Vyhnete sa davom turistov, budete sa cítiť ako cestovateľ a všetko máte po ruke – Slovensko je stredná Európa do vrecka. Objavíte stovky nečakaných zaujímavostí a tajomstiev takmer v každej obci, mestečku, na kopcoch aj v dolinách. Jedinečné hrady, jaskyne, termálne pramene, ľudová architektúra, európske Mŕtve more, slávne keltské mesto, európska divočina a mnoho iného. Také sú turistické unikáty Slovenska, ktoré by ste len ťažko hľadali niekde inde vo svete. Nebojte sa zísť z vychodených turistických trás a okrem neopakovateľnej prírody nájdete aj jedinečné prekvapenia.
                </p>
                <br />
                <p className="onas-p">
                    Slovensko, dlhý tvar Slovenská republika, je vnútrozemský štát v strednej Európe. Má rozlohu 49 036 km² a žije tu približne 5 464 060 obyvateľov. Hraničí na západe s Českom a Rakúskom, na severe s Poľskom, na východe s Ukrajinou a na juhu s Maďarskom. Krajina je prevažne hornatá, pretože väčšinu povrchu zaberajú vysočiny. Zo severu sem z mohutného oblúka zasahujú Karpaty, na juhu sa rozprestiera Panónska panva. Hlavným mestom je Bratislava, úradným jazykom je slovenčina. Ak by ste si radi pozreli mapu Slovenska, stačí kliknúť
                </p>
                <a href="https://www.google.com/maps/place/Slovensko/@48.6543373,17.4566067,7z/data=!3m1!4b1!4m5!3m4!1s0x471460b9ae7cc67f:0xcd6b6167b1723a7d!8m2!3d48.669026!4d19.699024" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">sem</p></a>
                <p className="onas-p">
                    Rozhodli ste sa pre dovolenku na Slovensku? Je na čase vybrať si to správne mesto. Neváhajte a prečítajte si základné informácie o známych mestách v našom blogu. Ak už máte mesto vybrané, vyberte si pomocou našej stránky ten najvhodnejší hotel.
                </p>
            </div>
        </Layout>
    )
}

export default oSlovensku