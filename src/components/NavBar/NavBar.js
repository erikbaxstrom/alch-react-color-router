import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/rgb/0/0/0">
            Black
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/rgb/111/111/111">
            Gray
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/rgb/222/222/222">
            Light Gray
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
