import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper}>
          <h3 className={s.subhead}>tealand</h3>
          <h1 className={s.title}>Fresh from our tea gardens to your cup</h1>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
            enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In commodo enim sit amet.
          </p>
          <button className={s.btn}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
