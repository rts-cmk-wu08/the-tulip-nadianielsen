import { useEffect, useState } from "react";
import axios from "axios";
import "./roomtypes.css"

const RoomTypes = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [rooms, setRooms] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/rooms")
        .then(response => setRooms(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && rooms && (
            rooms.roomtypes.map(roomtype => (
            <img src={roomtype.image} alt="" />
            ))
            )}
        </>
    );
}



export default RoomTypes;