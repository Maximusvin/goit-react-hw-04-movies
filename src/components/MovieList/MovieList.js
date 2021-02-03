import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import s from './MovieList.module.css';
import { makeImagePath } from '../../services/makeImagePath';
import Loader from 'react-loader-spinner';

export default function MovieList({
  movies,
  total,
  onChangePage,
  loading,
  currentPage,
}) {
  return (
    <>
      {loading ? (
        <Loader color="#ff0000" size="23" type="Rings" />
      ) : (
        <ul className={s.list}>
          {movies.map(movie => {
            const posterPath = makeImagePath(movie.poster_path, 'w185');
            return (
              <li className={s.item} key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  <div className={s.imageWrapper}>
                    <img
                      className={s.image}
                      src={posterPath}
                      alt={movie.title}
                      width="186"
                    />
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}

      {total > 1 && !loading && (
        <div
          style={{
            backgroundColor: '#3958A8',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '5px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <Pagination
            count={total}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={(event, pages) => {
              onChangePage(pages);
            }}
            page={currentPage}
          />
        </div>
      )}
    </>
  );
}
