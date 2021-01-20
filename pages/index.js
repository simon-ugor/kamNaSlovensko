import Layout from "../components/Layout"

import Head from "next/head"

import Link from "next/link"

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Kam na Slovensko</title>
                <meta name="description" content="Najlepšie destinácie na Slovensku? Ak plánujete cestu po Slovensku, nájdite si pomocou našej stránky tie najkrajšie miesta na Slovensku. Nájdete tu slovenské hotely, slovenské reštaurácie, slovenské bary ale aj slovenské kaviarne. Taktiež sa dozviete základné informácie o najznámejších slovenských mestách."></meta>
            </Head>
            <div className="main-homepage-div">
                <Link href="najlepsie-hotely-na-slovensku"><button className="homepage-button">Hotely</button></Link>
                <Link href="najlepsie-restauracie-na-slovensku"><button className="homepage-button">Reštaurácie</button></Link>
                <Link href="najlepsie-kaviarne-na-slovensku"><button className="homepage-button">Kaviarne</button></Link>
                <Link href="najlepsie-bary-na-slovensku"><button className="homepage-button">Bary</button></Link>
            </div>
        </Layout>
    )
}

export default index