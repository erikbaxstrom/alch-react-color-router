import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/111/111/111">Link 1</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/222/222/222">Link 2</NavLink>
        </li>
      </ul>
    </nav>
  );
}
