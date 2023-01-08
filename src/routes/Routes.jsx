import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
};

const SRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        </Routes>
      )}
    </>
  );
};

export default SRoutes;
