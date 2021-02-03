import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import s from './SearchBar.module.css';
import { fetchMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import usePages from '../Hooks/usePages';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import useLoader from '../Hooks/useLoader';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const { page, totalPage, handleChangePage, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    if (!value) return;

    setIsLoading(isLoading => !isLoading);

    fetchMovie(value, page)
      .then(([result, total_pages]) => {
        setMovies(result);
        setTotalPage(total_pages);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [setTotalPage, page, value, setIsLoading]);

  return (
    <>
      <div className={s.form}>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          className={s.input}
          placeholder={'input your query'}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      {movies && (
        <MovieList
          movies={movies}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
}
