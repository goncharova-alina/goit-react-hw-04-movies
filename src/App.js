import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from "./views/NotFoundView";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movies-details-page" */
  )
);

function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Downloding...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movies} exact component={MoviesPage} />
            <Route path={routes.moviesDetails} component={MovieDetailsPage} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
