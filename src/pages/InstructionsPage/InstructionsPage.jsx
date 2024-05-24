import Manual from '../../components/Manual/Manual';
import Table from '../../components/Table/Table';
import s from './InstructionsPage.module.css';

const InstructionsPage = () => {
  return (
    <section className={s.instr}>
      <div className="container">
        <Table />
        <Manual />
      </div>
    </section>
  );
};

export default InstructionsPage;
