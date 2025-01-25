import 'normalize.css';
import './styles/global.scss';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Main from './components/Main';
import Scroll from './components/Scroll';

import 'font-awesome/css/font-awesome.min.css';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
