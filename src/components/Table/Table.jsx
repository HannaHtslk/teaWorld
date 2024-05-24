import './Table.module.css';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tea Type</th>
          <th>Steeping Time</th>
          <th>Water Temperature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>White tea</div>
            <div>Japanese and elite Chinese green teas of spring harvest</div>
          </td>
          <td>5 minutes after boiling</td>
          <td>71-76 °C</td>
        </tr>
        <tr>
          <td>
            <div>Classic green</div>
            <div>Yellow tea</div>
          </td>
          <td>3 minutes after boiling</td>
          <td>76-82 °C</td>
        </tr>
        <tr>
          <td>Oolong</td>
          <td>2 minutes after boiling</td>
          <td>82-93 °C</td>
        </tr>
        <tr>
          <td>Black / red tea</td>
          <td>1 minute after boiling</td>
          <td>88-93 °C</td>
        </tr>
        <tr>
          <td>Pu-erh</td>
          <td>Use water immediately after boiling</td>
          <td>93-100 °C</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
