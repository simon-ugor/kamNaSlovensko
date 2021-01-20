import Layout from "../components/Layout"

import Facility from "../components/Facility"

import data from "../data/restauracie.js"

import Head from "next/head"

const najlepsieRestauracieNaSlovensku = () => {

    let restauracie = data.map(d => {
        return <Facility key={d.name} heading={d.name} city={d.mesto} link={d.link} />
    })

    return (
        <Layout>
            <Head>
                <title>Najlepšie reštaurácie na Slovensku</title>
                <meta name="description" content="Zistite ktoré sú tie najlepšie reštaurácie na Slovensku. Ak plánujete cestovať po Slovensku, dobré reštaurácie sú nevyhnutnou súčasťou. Nájdite tie najlepšie reštaurácie na Slovensku priamo tu."></meta>
            </Head>
            <div className="facilities-div">
                <h2 className="onas-heading">Zatiaľ neboli pridané žiadne reštaurácie.</h2>
                <p className="onas-p">Ak máte návrh, neváhajte a zašlite nám ho:</p>
                <p className="onas-p">coldenwebdev@gmail.com</p>
            </div>
        </Layout>
    )
}

export default najlepsieRestauracieNaSlovensku