import { useSelector } from 'react-redux';
import { selectTeas } from '../../redux/teas/slice';
import TeaItem from '../TeaItem/TeaItem';
import s from './TeaList.module.css';

const TeaList = () => {
  const items = useSelector(selectTeas);
  console.log(items);
  return (
    <div>
      <ul className={s.list}>
        {items.map(item => {
          console.log(item);
          return (
            <li className={s.item} key={item.id}>
              <TeaItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeaList;
