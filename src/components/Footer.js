import "./footer.css"
import logo from "../thetuliplogo.svg"


const Footer = () => {

    return ( 
        <>
        <footer className="footer">
            <div className="footer__grid">
                <img className="tulip" src={logo} alt="" />
                <p className="footer__text">Lorem ipsum dolor sit amet, consectetur</p>
                <input className="input__footer" type="text" placeholder="Your email address" />
                <h3 className="services__footer">Services</h3>
                <h3 className="reachus__footer">Reach Us</h3>
                <a className="restaurant" href="index.html">Restaurant</a>
                <a className="coffee__shop" href="index.html">Coffee Shop</a>
                <a className="car__wash" href="index.html">Car Wash</a> 
                <a className="cycle__rent" href="index.html">Cycle Rent</a>
                <a className="car__rent" href="index.html">Car Rent</a>
                <a className="mail__hotel" href="index.html">mail@hotel.us</a>
                <a className="phone__number" href="index.html">(239) 555-0108</a>
                <a className="address__hotel" href="index.html">6391 Elgin St. Celina, Delaware 10299</a>
            </div>


        </footer>
        </>
     );
}
 
export default Footer;