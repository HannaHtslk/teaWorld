import s from './Benefits.module.css';

const Benefits = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <img
          className={s.img}
          src="/public/img/benefits/org@2x.png"
          alt="organics"
          width="82"
        />
        <h4 className={s.title}>Organic roducts</h4>
      </li>
      <li className={s.item}>
        <img
          className={s.img}
          src="/public/img/benefits/cust@2x.png"
          alt="customer-service"
          width="82"
        />
        <h4 className={s.title}>Great customer service</h4>
      </li>
      <li className={s.item}>
        <img
          className={s.img}
          src="/public/img/benefits/seed@2x.png"
          alt="natural-ingredients"
          width="82"
        />
        <h4 className={s.title}>Natural Ingredients</h4>
      </li>
    </ul>
  );
};

export default Benefits;
