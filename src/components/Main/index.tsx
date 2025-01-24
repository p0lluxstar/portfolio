import About from '../About';
import styles from './index.module.scss';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <About />
      {/* <!-- Projects --> */}
      <section id="projects" className="section projects">
        <h2 className="section__title">Projects</h2>

        <div className="projects__grid">
          <div className="project">
            <h3>Project 1</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">SASS</li>
              <li className="project__stack-item">TypeScript</li>
              <li className="project__stack-item">React</li>
            </ul>

            <a
              href="https://github.com"
              aria-label="source code"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://example.com"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Project 2</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">SASS</li>
              <li className="project__stack-item">TypeScript</li>
              <li className="project__stack-item">React</li>
            </ul>

            <a
              href="https://github.com"
              aria-label="source code"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://example.com"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>Project 3</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">SASS</li>
              <li className="project__stack-item">TypeScript</li>
              <li className="project__stack-item">React</li>
            </ul>

            <a
              href="https://github.com"
              aria-label="source code"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://example.com"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p className="project__description">
              Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
              sapiente debitis labore sed ipsam Mollitia repellat illum quod
              unde beatae Quis
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">SASS</li>
              <li className="project__stack-item">TypeScript</li>
              <li className="project__stack-item">React</li>
            </ul>

            <a
              href="https://github.com"
              aria-label="source code"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>
            <a
              href="https://example.com"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Skills --> */}
      <section className="section skills" id="skills">
        <h2 className="section__title">Skills</h2>
        <ul className="skills__list">
          <li className="skills__list-item btn btn--plain">HTML</li>
          <li className="skills__list-item btn btn--plain">CSS</li>
          <li className="skills__list-item btn btn--plain">SCSS</li>
          <li className="skills__list-item btn btn--plain">JavaScript</li>
          <li className="skills__list-item btn btn--plain">TypeScript</li>
          <li className="skills__list-item btn btn--plain">React</li>
          <li className="skills__list-item btn btn--plain">Redux</li>
          <li className="skills__list-item btn btn--plain">Git</li>
          <li className="skills__list-item btn btn--plain">Material UI</li>
          <li className="skills__list-item btn btn--plain">Jest</li>
          <li className="skills__list-item btn btn--plain">Enzyme</li>
          <li className="skills__list-item btn btn--plain">CI/CD</li>
        </ul>
      </section>

      {/* <!-- Contact --> */}
      <section className="section contact center" id="contact">
        <h2 className="section__title">Contact</h2>
        <a href="mailto:rjshekhar.official@gmail.com">
          <span className="btn btn--outline">Email me</span>
        </a>
      </section>
    </main>
  );
}
