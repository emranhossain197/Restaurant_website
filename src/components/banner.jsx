import VictorImage from "../assets/images/victor-1.png"
import BannerImage from '../assets/images/banner.png'
import VictorImage2 from "../assets/images/victor.png"
import "../assets/css/banner.css"

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="banner-left-container">
                <h1>Taste the authentic  <br />
                    Saudi cuisine</h1>
                <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                <button>Our Menu</button> <br />
                <img src={VictorImage} alt="Victor image" />
            </div>
            <div className="banner-right-container">
                <img className="banner-image" src={BannerImage} alt="Banner image" />
                <img className="victor_image" src={VictorImage2} alt="Victor image" />
            </div>
        </div>
    )
}

export default Banner;