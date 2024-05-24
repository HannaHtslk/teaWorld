import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <section className={s.aboutSection}>
      <div className="container">
        <h2 className={s.title}>We Believe in Perfection in the art of Tea.</h2>
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img
              className={s.img}
              src="/public/img/about/asian@2x.png"
              alt="white-tea-pot"
              height="320"
            />
            <img
              className={s.img}
              src="/public/img/about/teapot@2x.png"
              alt="black-tea-pot"
              height="320"
            />
          </div>

          <ul className={s.list}>
            <li className={s.item}>
              <h3 className={s.name}>100% Organic</h3>
              <p className={s.text}>
                Et malesuada fames ac turpis egestas maecenas pharetra convallis
                met nisl purus.
              </p>
            </li>
            <li className={s.item}>
              <h3 className={s.name}>High Quality</h3>
              <p className={s.text}>
                Et malesuada fames ac turpis egestas maecenas pharetra convallis
                met nisl purus.
              </p>
            </li>
            <li className={s.item}>
              <h3 className={s.name}>Always Fresh</h3>
              <p className={s.text}>
                Et malesuada fames ac turpis egestas maecenas pharetra convallis
                met nisl purus.
              </p>
            </li>
          </ul>
        </div>
        <ul className={s.imgList}>
          <li className={s.imgItem}>
            <img
              src="/public/img/about/asian-tea-concept-two-white-cups-tea-teapot-tea-set-chopsticks-bamboo-mat-surrounded-with-dry-green-tea 1@2x.jpg"
              alt=""
              width="220"
            />
          </li>
          <li className={s.imgItem}>
            <img
              src="/public/img/about/tamara-schipchinskaya-jtAvJcJCdgY-unsplash 1@2x.jpg"
              alt=""
              width="220"
            />
          </li>
          <li className={s.imgItem}>
            <img
              src="/public/img/about/alisher-sharip-mumpl9-D7Uc-unsplash 1@2x.png"
              alt=""
              width="220"
            />
          </li>
          <li className={s.imgItem}>
            <img
              src="/public/img/about/layout-made-cup-black-tea-leaves-white 1@2x.jpg"
              alt=""
              width="220"
            />
          </li>
          <li className={s.imgItem}>
            <img
              src="/public/img/about/oriento-z26H7EPwARg-unsplash 1@2x.jpg"
              alt=""
              width="220"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
