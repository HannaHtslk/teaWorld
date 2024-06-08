import { useDispatch } from 'react-redux';

import TeaList from '../../components/TeaList/TeaList';
import s from './AssortmentPage.module.css';
import { useEffect } from 'react';
import { fetchTeasThunk } from '../../redux/teas/operations';

const AssortmentPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeasThunk());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className="container">
        <TeaList />
      </div>
    </section>
  );
};

export default AssortmentPage;
