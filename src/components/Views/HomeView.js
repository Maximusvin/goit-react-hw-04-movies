import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import usePages from '../Hooks/usePages';
import useLoader from '../Hooks/useLoader';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const { page, totalPage, setTotalPage, handleChangePage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchTrandingMovie(page)
      .then(([result, total]) => {
        setTrandingMovie(result);
        setTotalPage(total);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading, setTotalPage]);

  return (
    <>
      <h1>Tranding Movies</h1>

      {trandingMovie && (
        <MovieList
          movies={trandingMovie}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
}
