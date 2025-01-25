import 'normalize.css';
import './styles/global.scss';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Main from './components/Main';
import Scroll from './components/Scroll';
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
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
