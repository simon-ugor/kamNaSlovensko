import Header from "../components/Header"
import Footer from "../components/Footer"
import Homepage from "../components/Homepage"

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Homepage />
            <Footer />
            <div className="bg-div"></div>
        </div>
    )
}

export default Layout