import { useEffect, useState } from "react";
import axios from "axios";
import "./reviews.css"

const Reviews = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        axios("http://localhost:4000/reviews")
        .then(response => setReviews(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);

    return ( 
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error}</p>}
            {!error && reviews &&
                <section className="reviews">
                    <h2 className="reviews__heading">{reviews.headline}</h2>
                    <p className="reviews__text">{reviews.text}</p>
                    <div className="reviews__grid">
                    {reviews.testimonials.map(review => (
                        <div>
                            <div className="reviews__boxes">
                            <p className="reviews__text">{review.text}</p>
                            <p>{review.stars} stars</p>
                            </div>
                            <div className="reviewers">
                                <img className="img__reviews" key={review.id} src={review.imageUrl} alt="" />
                                <p className="reviews__names">{review.name}</p>
                                <p className="reviews__handle">{review.handle}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
            
            
            }
        
        
        
        </>

     );
}
 
export default Reviews;