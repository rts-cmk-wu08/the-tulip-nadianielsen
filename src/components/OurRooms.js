import { useEffect, useState } from "react";
import axios from "axios";
import "./ourrooms.css"

const OurRooms = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [ourRooms, setOurRooms] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/rooms")
        .then(response => setOurRooms(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && ourRooms && (
                <>
                <h2 className="ourrooms__headline">{ourRooms.headline}</h2>
                <p className="ourrooms__text">{ourRooms.text}</p>
                </>
            )}
        </>
    );
}



export default OurRooms;