import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/0/0/0">Black</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/111/111/111">Gray</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/222/222/222">Light Gray</NavLink>
        </li>
      </ul>
    </nav>
  );
}
