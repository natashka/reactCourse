import ReviewItem from "./ReviewItem.jsx";

export default function Reviews({reviews}) {
    return <>
        <h3>Reviews:</h3>
        <ul>
            {reviews.map(review => (<ReviewItem key={review.id} review={review}/>))}
        </ul>
    </>

}