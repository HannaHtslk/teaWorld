import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Get in touch</h4>
      <address className={s.address}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href="tel:+0123456789">
              +012-345-6789
            </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="mailto:tealand@contact.com">
              tealand@contact.com
            </a>
          </li>
          <li className={s.item}>
            9889 lorem ipsum street <br /> Pelentesque CA USA
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Contacts;
