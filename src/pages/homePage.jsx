import Banner from "../components/banner";
import Details from "../components/datails";
import Footer from "../components/footer";
import Nagivation from "../components/navigation";
import ReviewClient from "../components/reviewClient";
import VenceComponents from "../components/vence";


const HomePage = () => {
    return (
        <>
            <div className="main-contant">
                <Nagivation />
                <Banner />
                <VenceComponents />
                <ReviewClient />
                <Details />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;