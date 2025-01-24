import 'normalize.css';
import './styles/global.scss';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/index';
import Main from './components/Main';
import i18n from './i18n';
import 'font-awesome/css/font-awesome.min.css';

function App(): JSX.Element {
  const { t } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div>
        <label>{t('language')}: </label>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
      </div>
      <Header />
      <Main />
      <footer className="footer">
        <a
          href="https://github.com/rjshkhr/cleanfolio-minimal"
          className="link footer__link"
        >
          Created By Raj Shekhar
        </a>
      </footer>

      <div className="scroll-container">
        <div className="scroll-top">
          <a aria-label="Scroll up" href="#top">
            <i aria-hidden="true" className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
