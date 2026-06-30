export default function ReviewItem({review}) {
    return (<li>{review.user} - {review.rating}: {review.text} </li>);
}