import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/goit-react-hw-05-movies/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/goit-react-hw-05-movies/movies"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
