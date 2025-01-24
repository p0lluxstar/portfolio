import 'normalize.css';
import './styles/global.scss';
import Header from './components/Header/index';
import Main from './components/Main';

function App(): JSX.Element {
  return (
    <>
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
