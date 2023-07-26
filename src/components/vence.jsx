import "../assets/css/vence.css"
import VenceImage from "../assets/images/vence.png"

const VenceComponents = () => {
    return (
        <div className="vence_container">
            <div className="vence_left_container">
                <img src={VenceImage} alt="Image" />
            </div>
            <div className="vence_right_container">
                <div className="animation_contant">
                    <div className="scene">
                        <div className="container">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <h1>A distinctive dining destination inspired by the culture.</h1>
                <p>Experience Al Balad old town of Jeddah vibes. </p>
                <button>Our Venue</button>
            </div>
        </div>
    )
}

export default VenceComponents;