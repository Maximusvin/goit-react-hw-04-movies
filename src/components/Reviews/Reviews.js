import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/tmdb-api';
import s from './Reviews.module.css';

function Review({ reviews }) {
  const [showMore, setShowMore] = useState(false);
  const changeReviewLength = content => content.slice(0, 300) + ' ...';
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <li key={id} className={s.item}>
            <h3 className={s.title}>Author: {author}</h3>
            <p className={s.review}>
              {!showMore ? changeReviewLength(content) : content}
            </p>
            <button
              className={s.showMore}
              onClick={() => setShowMore(!showMore)}
              data-id={id}
            >
              {showMore ? 'less more' : 'show more'}
            </button>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
}

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      <Review reviews={reviews} />
    </ul>
  );
}
