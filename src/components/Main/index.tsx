import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Skills from '../Skills';
import styles from './index.module.scss';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
