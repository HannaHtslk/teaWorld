import s from './TeaItem.module.css';

const TeaItem = ({ item }) => {
  if (!item) return <p>Loading...</p>;
  return (
    <>
      <img className={s.img} src={item.img} alt={item.title} width="240" />

      <div className={s.content}>
        <h4 className={s.title}>
          Name: <span className={s.span}>{item.title}</span>
        </h4>
        <p className={s.region}>
          Region: <span className={s.span}>{item.region}</span>
        </p>
        <p className={s.price}>
          Price:
          <span className={s.span}>
            ${item.price} / {item.size}
          </span>
        </p>
        <button className={s.btn} type="button">
          <img
            className={s.icon}
            src="../../../public/img/hero/cart@2x.webp"
            alt="cart"
            width="18"
            height="22"
          />
        </button>
      </div>
    </>
  );
};

export default TeaItem;
