import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div>
        <img
          src="https://2fan.ru/upload/000/u1/3/7/805f88fd.jpg"
          alt="not found"
          width="500"
        />
        <p>
          Oooops, page not found
          <NavLink to="/goit-react-hw-05-movies/">
            to Home
          </NavLink>
        </p>
      </div>
    </div>
  );
}
