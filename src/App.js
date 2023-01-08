import './styles/main.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/UI/Preloader/Preloader';
import Routes from './routes/Routes';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
