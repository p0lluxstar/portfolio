import { StrictMode, useContext, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

const Root = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Устанавливаем класс на <html>
    const rootElement = document.body;
    rootElement.classList.remove('light', 'dark');
    rootElement.classList.add(theme);
  }, [theme]);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </StrictMode>
);
