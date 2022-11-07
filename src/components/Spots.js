import { useEffect, useState } from "react";
import axios from "axios";
import { IoDiamondSharp } from "react-icons/io5"
import "./spots.css"

const Spots = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [spots, setSpots] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/spots")
        .then(response => setSpots(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return ( 
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error}</p>}
            {!error && spots && 
                <section className="spots">
                    <div className="spots__grid">
                    {spots.map(spot => ( 
                            <div className="spots__boxes">
                            <IoDiamondSharp className="icon__orange"/>
                            <h3 className="heading__spots">{spot.name}</h3>
                            <p className="spots__text">{spot.text}</p>
                        </div>
                    ))}
                    </div>
                </section> 
            }
        </>
     );
}



export default Spots;