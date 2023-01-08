
import Media from 'react-media';
import LinksNav from '../LinksNav/LinksNav';
import SD from '../SDrawer/SDrawer';
import style from './MainNav.module.scss';
import { useState } from 'react';
import BurgerNav from '../BurgerNav/BurgerNav';

const MainNav = () => {


  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggle = () => {
    setIsDrawerOpen((a) => !a);
  };


  return (
    <>
      <nav className={style.desktop}>
        <LinksNav />
      </nav>
      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <BurgerNav onClick={toggle} />
          </>
        )}
      </Media>

      <SD show={isDrawerOpen} onClose={toggle}>
        <nav className={style.navigationDrawerNav}>
          <LinksNav />
        </nav>
      </SD>
    </>
  );
};

export default MainNav;
