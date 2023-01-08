import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './hooks/themeHook/themeContext';

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Root />);


