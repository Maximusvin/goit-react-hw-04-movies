import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/tmdb-api';
import { makeImagePath } from '../../services/makeImagePath';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setActors);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {actors.length > 0 ? (
        actors.map(({ profile_path, name, id }) => {
          const imageUrl = makeImagePath(profile_path, 'w185');
          return (
            <li className={s.item} key={id}>
              <img className={s.image} src={imageUrl} alt={name} width="130" />
              <h2 className={s.title}>{name}</h2>
            </li>
          );
        })
      ) : (
        <p>no info</p>
      )}
    </ul>
  );
}
