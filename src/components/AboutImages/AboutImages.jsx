import s from './AboutImages.module.css';

const AboutImages = () => {
  return (
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
  );
};

export default AboutImages;
