import TeaList from '../../components/TeaList/TeaList';
import s from './AssortmentPage.module.css';

const AssortmentPage = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <TeaList />
      </div>
    </section>
  );
};

export default AssortmentPage;
