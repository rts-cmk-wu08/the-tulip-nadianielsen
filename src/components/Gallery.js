import { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css"

const Gallery = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [gallery, setGallery] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/gallery")
        .then(response => setGallery(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);
    
    return ( 
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error}</p>}
            {!error && gallery && 
                <section>
                    <h2 className="gallery__heading">{gallery.headline}</h2>
                    <p className="gallery__text">{gallery.text}</p>
                    <div className="gallery">
                    {gallery.images.map(image => ( 
                        <img className="gallery__img" key={image.id} src={image.url} alt="" />
                        
                    ))}
                    </div>
                </section> 
            }
        </>
     );
}



export default Gallery;