import { useState, useEffect, Suspense } from 'react';
import { lazy } from 'react';
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import s from './MovieDetailsView.module.css';
import { fetchMovieDetails } from '../../services/tmdb-api';
import MovieDetails from '../MovieDetails/MovieDetails';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsView() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetails {...movie} />

      <nav className={s.nav}>
        <NavLink
          to={`${url}/cast`}
          className={s.link}
          activeClassName={s.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={s.link}
          activeClassName={s.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader timeout={10000} color="#ff0000" />}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
