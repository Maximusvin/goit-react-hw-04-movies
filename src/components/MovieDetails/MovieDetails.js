import { HiLink } from 'react-icons/hi';
import s from './MovieDetails.module.css';
import { makeImagePath } from '../../services/makeImagePath';

export default function MovieDetails({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  backdrop_path,
  overview,
}) {
  const posterUrl = makeImagePath(poster_path);
  return (
    <article className={s.article}>
      <div className={s.titleBlock}>
        <h2 className={s.movieTitle}>{title}</h2>

        <img className={s.image} src={posterUrl} alt={title} width="300" />
      </div>
      <div className={s.description}>
        <h3 className={s.title}>Genres: </h3>
        <ul className={s.genresList}>
          {genres &&
            genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
        </ul>
        <h3 className={s.title}>Description:</h3>
        <p className={s.overview}>{overview}</p>

        <p className={s.voteText}>
          tmbd: <span className={s.vote}>{vote_average}</span>
        </p>
        <a className={s.link} href={homepage} target="_blank" rel="noreferrer">
          <HiLink className={s.icon} />
        </a>
      </div>
    </article>
  );
}
