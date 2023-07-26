import Logo from "../assets/images/logo.png"
import "../assets/css/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <img className="logo" src={Logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Venu</li>
                    <li>Events</li>
                    <li>Contact Us</li>
                </ul>
            </div> <hr />
            <div className="footer_content">
                <h4>© 2021 | All rights reserved.</h4>
                <div className="icons">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer