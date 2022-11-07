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
            { loading && <p>Loading...</p>}
            { error && <p>{error}</p>}
            {!error && rooms && 
                <section className="room__types">
                    {rooms.roomtypes.map(room => ( 
                        <div className="rooms__boxes">
                        <img className="rooms__img" key={room.id} src={room.image} alt="" />
                        <p className="guests color__white">{room.guests} Guests</p>
                        <p className="size color__white">{room.size}</p>
                        <h3 className="family__room">{room.type}</h3>
                        <p className="description">{room.description}</p>
                        <p className="price color__white">${room.price}</p>
                        </div>
                    ))}
                </section> 
            }
        </>
     );
}



export default RoomTypes;