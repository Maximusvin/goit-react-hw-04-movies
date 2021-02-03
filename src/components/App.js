import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from './AppBar/AppBar';
import Container from './Layouts/Container';

const HomeView = lazy(() => import('./Views/HomeView'));
const SearchMoviesView = lazy(() =>
  import('./Views/SearchMoviesView' /* webpackChunkName: "home-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './Views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  ),
);

function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={<Loader type="Rings" timeout={10000} color="#ff0000" />}
        >
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/movies" component={SearchMoviesView} exact />
            <Route path="/movies/:movieId" component={MovieDetailsView} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
