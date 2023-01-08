import style from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UI/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNav from '../../components/Nav/MainNav/MainNav';

const HomeLayout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Particles />


      <Header>
        <MainNav />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
