import Layout from "../components/Layout"
import Head from "next/head"

const oNas = () => {
    return (
        <Layout>
            <Head>
                <title>O Nás</title>
                <meta name="description" content="Základné informácie o stránke kamnaslovensko.sk. Zistíte tu kto sme a ako fungujeme."></meta>
            </Head>
            <div className="onas-div">
                <h2 className="onas-heading">O Nás</h2>
                <p className="onas-p">
                    Sme webová stránka ktorá zhŕňa najlepšie
                    lokality na Slovensku, kam sa určite stojí za to
                    ísť pozrieť.
                </p>
            </div>
        </Layout>
    )
}

export default oNas