import { NavLink } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { IoSearchCircleSharp } from 'react-icons/io5';
import s from './Navigations.module.css';

export default function Navigations() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/" exact>
        <ImHome />
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/movies">
        <IoSearchCircleSharp size="25" />
        <span className={s.search}>SearchMovie</span>
      </NavLink>
    </nav>
  );
}
