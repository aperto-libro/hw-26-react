import React from 'react';
import data from '../db/data';
import TableRow from './TableRow';

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th className="column">Name</th>
          <th className="column">Last Name</th>
          <th className="column">Days worked</th>
          <th className="column">Rate</th>
          <th className="column">Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((worker) => {
          return <TableRow key={worker.id} rowData={worker} />;
        })}
      </tbody>
    </table>
  );
}
