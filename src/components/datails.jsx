// import Image from "../assets/images/Vector-4.png"
import Vector from "../assets/images/Vector-3.png"
import "../assets/css/details.css"


const Details = () => {

    return (
        <div className="details_container">
            <img src={Vector} alt="Vector image" />
            <h1>A unique menu that reflects the true essence of the Saudi cuisine</h1>
            <button>Our Menu</button>
        </div>
    )
}
export default Details;