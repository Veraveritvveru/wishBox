import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col">
        <li>
          <Link to="/">Мои хотелки</Link>
        </li>
        <li>
          <Link to="/gifts-ideas">Идеи подарков друзьям</Link>
        </li>
        <li>
          {' '}
          <Link to="/settings">Настройки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
