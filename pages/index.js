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
                <Link href="najlepsie-hotely-na-slovensku"><a className="homepage-button">Hotely</a></Link>
                <Link href="najlepsie-restauracie-na-slovensku"><a className="homepage-button">Reštaurácie</a></Link>
                <Link href="najlepsie-kaviarne-na-slovensku"><a className="homepage-button">Kaviarne</a></Link>
                <Link href="najlepsie-bary-na-slovensku"><a className="homepage-button">Bary</a></Link>
            </div>
        </Layout>
    )
}

export default index