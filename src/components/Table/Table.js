import React from 'react';
import data from '../../db/data';
import Row from '../Row/Row';

export default function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="column">Name</th>
          <th className="column">Last Name</th>
          <th className="column">Days worked</th>
          <th className="column">Pay Rate</th>
          <th className="column">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((worker) => {
          return <Row key={worker.id} rowData={worker} />;
        })}
      </tbody>
    </table>
  );
}
