import Layout from "../components/Layout"

import Head from "next/head"

const kontakt = () => {
    return (
        <Layout>
            <Head>
                <title>Kontakt</title>
                <meta name="description" content="Ak máte otázky alebo návrhy, neváhajte nás kontaktovať na našej emailovej adrese."></meta>
            </Head>
            <div className="onas-div">
                <h2 className="onas-heading">Kontakt</h2>
                <p className="onas-p">
                    Kontaktovať nás môžete na e-mailovej adrese: 
                </p>
                <p className="onas-p">
                    coldenwebdev@gmail.com
                </p>
            </div>
        </Layout>
    )
}

export default kontakt