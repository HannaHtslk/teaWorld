import s from './AboutInfo.module.css';
const AboutInfo = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          src="/img/about/asian@2x.png"
          alt="white-tea-pot"
          height="320"
        />
        <img
          className={s.img}
          src="/img/about/teapot@2x.png"
          alt="black-tea-pot"
          height="320"
        />
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <h3 className={s.name}>100% Organic</h3>
          <p className={s.text}>
            Et malesuada fames ac turpis egestas maecenas pharetra convallis met
            nisl purus.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.name}>High Quality</h3>
          <p className={s.text}>
            Et malesuada fames ac turpis egestas maecenas pharetra convallis met
            nisl purus.
          </p>
        </li>
        <li className={s.item}>
          <h3 className={s.name}>Always Fresh</h3>
          <p className={s.text}>
            Et malesuada fames ac turpis egestas maecenas pharetra convallis met
            nisl purus.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutInfo;
