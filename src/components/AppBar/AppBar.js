import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./AppBar.scss";

const AppBar = () => (
  <header className="AppBar">
    <nav className="navigation">
      <NavLink
        exact
        to={routes.home}
        className="link"
        activeClassName="activeLink"
      >
        Home
      </NavLink>

      <NavLink to={routes.movies} className="link" activeClassName="activeLink">
        Movies
      </NavLink>
    </nav>
  </header>
);

export default AppBar;
