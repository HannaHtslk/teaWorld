import s from './WorkingHours.module.css';

const WorkingHours = () => {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Working hours</h4>
      <p className={s.text}>Monday/Friday 9:00-23:00</p>
      <p className={s.text}>Saturday 10:00-21:00</p>
      <p className={s.text}>Weekend Closed</p>
    </div>
  );
};

export default WorkingHours;
