import BlogFacility from "../components/BlogFacility"
import Layout from "../components/Layout"
import Head from "next/head"

const slovenskoBlog = () => {
    return (
        <Layout>
            <Head>
                <title>Blog o Slovensku</title>
                <meta name="description" content="Zaujímate sa o Slovensko? Tu nájdete rozličné články či už na témy ako najlepšie hotely v meste, najkrajšie miesta na Slovensku alebo zaujímavosti o Slovensku."></meta>
            </Head>
            <div className="facilities-div">
                <h2 className="onas-heading">Blog</h2>
                <BlogFacility link="blog/najlepsie-hotely-v-trnave" heading="Najlepšie hotely v Trnave" city="Plánujete cestu do Trnavy a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Trnave" />
                <BlogFacility link="blog/najlepsie-hotely-v-bratislave" heading="Najlepšie hotely v Bratislave" city="Cestujete do Bratislavy a hľadáte vhodný hotel? Pomocou našej stránky nájdete najlepšie hotely v Bratislave" />
                <BlogFacility link="blog/najlepsie-hotely-v-ziline" heading="Najlepšie hotely v Žiline" city="Plánujete cestu do Žiliny a neviete kde sa ubytovať? Zistite ktoré sú najlepšie hotely v Žiline" />
                <BlogFacility link="blog/najlepsie-hotely-v-kosiciach" heading="Najlepšie hotely v Košiciach" city="Cestujete do Košíc a hľadáte vhodný hotel? Pomocou našej stránky nájdete najlepšie hotely v Košiciach" />
                <BlogFacility link="blog/najlepsie-hotely-v-nitre" heading="Najlepšie hotely v Nitre" city="Cestujete do Nitry a hľadáte vhodný hotel? Pomocou našej stránky nájdete najlepšie hotely v Nitre" />
                <BlogFacility link="blog/je-na-slovensku-lockdown" heading="Je na Slovensku lockdown?" city="Je na Slovensku lockdown? Zistite ako prebieha COVID-19 na Slovensku a pozrite si prehľad zákazov." />
            </div>
        </Layout>
    )
}

export default slovenskoBlog