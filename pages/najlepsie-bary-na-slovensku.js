import Layout from "../components/Layout"

import Facility from "../components/Facility"

import data from "../data/bary.js"

import Head from "next/head"

const najlepsieBaryNaSlovensku = () => {

    let bary = data.map(d => {
        return <Facility key={d.name} heading={d.name} city={d.mesto} link={d.link} />
    })

    return (
        <Layout>
            <Head>
                <title>Najlepšie bary na Slovensku</title>
                <meta name="description" content="Najlepšie bary na Slovensku? Ak obľubujete návštevu barov, neváhajte a zistite pomocou našej stránky ktoré sú tie najlepšie bary na Slovensku."></meta>
            </Head>
            <div className="facilities-div">
                <h2 className="onas-heading">Zatiaľ neboli pridané žiadne bary.</h2>
                <p className="onas-p">Ak máte návrh, neváhajte a zašlite nám ho:</p>
                <p className="onas-p">coldenwebdev@gmail.com</p>
            </div>
        </Layout>
    )
}

export default najlepsieBaryNaSlovensku