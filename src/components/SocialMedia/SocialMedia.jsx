import { Link } from 'react-router-dom';
import s from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={s.wrapper}>
      <Link className={s.logo} to="/">
        <img
          src="/img/hero/logo@2x.png"
          alt="Logo"
          className={s.logo}
          width="169"
          height="123"
        />
      </Link>
      <ul className={s.list}>
        <li className={s.item}>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/footer/twitter@2x.png"
              alt="twitter"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className={s.item}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/footer/inst@2x.png"
              alt="instagram"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className={s.item}>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/footer/tiktok@2x.png"
              alt="tiktok"
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
