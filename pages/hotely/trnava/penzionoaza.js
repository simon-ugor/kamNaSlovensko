import Link from "next/link"
import Layout from "../../../components/Layout"
import Head from "next/head"

const penzionoaza = () => {
	return (
		<Layout>
		<Head>
			<title>Penzión Oáza</title>
            <meta name="description" content="Penzión Oáza sa nachádza cca 700 metrov od centra Trnavy. Svojim hosťom ponúka bezplatné strážené parkovisko vo dvore."></meta>
		</Head>
		<div className="onas-div">
			<h2 className="onas-heading">Penzión Oáza</h2>
			<h2 className="onas-subheading">Trnava</h2>
			<p className="onas-p">Penzión Oáza sa nachádza cca 700 metrov od centra Trnavy. Svojim hosťom ponúka bezplatné strážené parkovisko vo dvore. V celom areáli môžete bezplatne využívať vysokorýchlostné Wi-Fi pripojenie na internet. V okruhu 1 km od apartmánov s obsluhou penziónu Oáza nájdete Mestskú vežu a Trojičné námestie.Všetky izby s vlastnou kúpeľňou sú vybavené satelitnou LCD TV, extra veľkou manželskou posteľou a chladničkou/minibarom. Majú aj posedenie a pracovný stôl.Každé ráno od 6:30 si v penzióne Oáza môžete pochutiť na výdatných raňajkách formou bufetu. Využite výbavu na grilovanie.Len 50 metrov od penziónu sa nachádza tenisové centrum Empire. Zacvičiť si môžete aj vo fitnescentre so saunou Pohoda, ktoré je od penziónu Oáza vzdialené 1 km. K iným zaujímavostiam v okolí patrí futbalový štadión Spartak Trnava, situovaný vo vzdialenosti 1,2 km. a bezplatné súkromné parkovisko.</p>
			<a href="https://www.booking.com/hotel/sk/penzia3n-oa-za.sk.html?label=gen173nr-1FCAMozQFCBnRybmF2YUgiWARozQGIAQGYASK4AQfIAQzYAQHoAQH4AQKIAgGoAgO4ArrxkoAGwAIB0gIkYTE2YWIwZjQtYmU4NC00MzA3LTkzMjEtYWE1MDY3MjMyYjRj2AIF4AIB;sid=40474f1b621d169be57d0337043b07da" target="_blank" rel="noopener noreferrer"><p className="link-footer-naspat">Zistiť o hoteli viac</p></a>
			<Link href="/najlepsie-hotely-na-slovensku"><p className="link-footer-naspat">Naspäť</p></Link>
		</div>
		</Layout>
	)
}

export default penzionoaza