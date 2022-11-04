import { useEffect, useState } from "react";
import axios from "axios";
import "./heroheader.css"

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
        <header className="header">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && hero && (
                <>
                <img className="hero" src={hero.image} alt="" />
                <h1 className="hero__headline">{hero.headline}</h1>
                </>
            )}
        </header>
    );
}



export default HeroHeader;
