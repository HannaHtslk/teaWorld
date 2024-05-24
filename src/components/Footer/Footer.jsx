import s from './Footer.module.css';
import Contacts from '../Contacts/Contacts';
import SocialMedia from '../SocialMedia/SocialMedia';
import WorkingHours from '../WorkingHours/WorkingHours';

const Footer = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Contacts />
        <SocialMedia />
        <WorkingHours />
      </div>
      <p className={s.copyright}>Copyright Dotcreativemarket</p>
    </>
  );
};

export default Footer;
