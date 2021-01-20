import Layout from "../components/Layout"

import Facility from "../components/Facility"

import data from "../data/hotely.js"

import React, { useEffect, useState } from "react"

import Head from "next/head"

const najlepsieHotelyNaSlovensku = () => {

    const [hotely, setHotely] = useState([...data])

    const handleChange = (event) => {
        setHotely(() => data.filter((item) => item.mesto === event.target.value))
    }

    return (
        <Layout>
            <Head>
                <title>Najlepšie hotely na Slovensku</title>
                <meta name="description" content="Ktoré sú najlepšie hotely na Slovensku? Plánujete svoju cestu a neviete kde sa ubytovať? Neriskujte a nájdite si pomocou našej stránky vhodný hotel pre Váš pobyt."></meta>
            </Head>
            <div className="facilities-div">
                <select className="select-box" onChange={handleChange}>
                    <option selected={true} disabled="disabled">Vyberte mesto</option>
                    <option value="Trnava">Trnava</option>
                    <option value="Bratislava">Bratislava</option>
                    <option value="Nitra">Nitra</option>
                    <option value="Košice">Košice</option>
                    <option value="Žilina">Žilina</option>
                </select>
                {hotely.map(d => {
                    return <Facility key={d.name} heading={d.name} city={d.mesto} link={d.link} />
                })}
            </div>
        </Layout>
    )
}

export default najlepsieHotelyNaSlovensku