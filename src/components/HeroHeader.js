import { useEffect, useState } from "react";
import axios from "axios";
import "./heroheader.css"
import logo from "../thetuliplogo.svg"

const HeroHeader = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [hero, setHero] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/hero")
        .then(response => setHero(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return (
        <>
        {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && hero && (
                <header className="header">
                    <nav className="nav__bar imagediv">
                            <a className="nav__a home" href="index.html">Home</a>
                            <a className="nav__a" href="index.html">Rooms & Suites</a>
                            <a className="nav__a" href="index.html">Services</a>
                            <a className="nav__a" href="index.html">About US</a>
                            <a className="nav__a" href="index.html">Booking</a> 
                    </nav>
                    <img className="hero" src={hero.image} alt="" />
                <h1 className="hero__headline">{hero.headline}</h1>
                <img className="tulip__logo" src={logo} alt="" />
                </header>
            )}
        </>
    );
}



export default HeroHeader;
