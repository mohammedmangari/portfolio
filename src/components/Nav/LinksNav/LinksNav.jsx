import style from './NavLinks.module.scss';
import {AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineUser,} from 'react-icons/ai';
import { routes } from '../../../routes/Routes';
import { NavLink } from 'react-router-dom';
const LinksNav = () => {
  return (
    <ul className={style.navBar}>
      <li>
        <NavLink to={routes.HOME} end>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT}>
          <AiOutlineUser />
          ABOUT
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
           PROJECTS
        </NavLink>
      </li>
    </ul>
  );
};

export default LinksNav;
