import React from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundView from "./views/NotFoundView";

import routes from "./routes";

const App = () => {
  return (
    <>
      {/* <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie
          </NavLink>
        </li>
      </ul> */}
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
