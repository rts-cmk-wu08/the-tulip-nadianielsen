import { useEffect, useState } from "react";
import axios from "axios";
import "./ourservices.css"

const OurServices = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [services, setServices] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/services")
        .then(response => setServices(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return ( 
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error}</p>}
            {!error && services && 
                <section className="">
                    <h2 className="ourservices">{services.headline}</h2>
                    <p className="services__text">{services.text}</p>
                    {services.facilities.map(service => ( 
                        <div className="services">
                            <section className="text__section">
                            <h3 className="heading__services">{service.name}</h3>
                            <p>{service.text1}</p>
                            <p>{service.text2}</p>
                            </section>
                            <img className="services__img" src={service.image} alt="" />
                        </div>
                    ))}
                </section> 
            }
        </>
     );
}



export default OurServices;