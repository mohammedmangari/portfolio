import style from './Layout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UI/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNav from '../../components/Nav/MainNav/MainNav';

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Particles />

      <Header>
        <MainNav />
      </Header>

      <div className={style.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
