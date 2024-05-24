import AboutImages from '../../components/AboutImages/AboutImages';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Benefits from '../../components/Benefits/Benefits';
import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <section className={s.aboutSection}>
      <div className="container">
        <h2 className={s.title}>We Believe in Perfection in the art of Tea.</h2>
        <AboutInfo />
        <Benefits />
        <AboutImages />
      </div>
    </section>
  );
};

export default AboutPage;
