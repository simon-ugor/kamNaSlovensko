import Layout from "../components/Layout"

import Facility from "../components/Facility"

import data from "../data/kaviarne.js"

import Head from "next/head"

const najlepsieKaviarneNaSlovensku = () => {

    let kaviarne = data.map(d => {
        return <Facility key={d.name} heading={d.name} city={d.mesto} link={d.link} />
    })

    return (
        <Layout>
            <Head>
                <title>Najlepšie kaviarne na Slovensku</title>
                <meta name="description" content="Ktoré sú najlepšie kaviarne na Slovensku? Ak obľubujete návštevu kaviarní a plánujete cestu po Slovensku alebo hľadáte najlepšiu kaviareň v svojom meste, tu ste na spávnom mieste."></meta>
            </Head>
            <div className="facilities-div">
                <h2 className="onas-heading">Zatiaľ neboli pridané žiadne kaviarne.</h2>
                <p className="onas-p">Ak máte návrh, neváhajte a zašlite nám ho:</p>
                <p className="onas-p">coldenwebdev@gmail.com</p>
            </div>
        </Layout>
    )
}

export default najlepsieKaviarneNaSlovensku