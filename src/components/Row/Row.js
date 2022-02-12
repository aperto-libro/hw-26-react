import React, { useState } from 'react';

export default function TableRow({ rowData }) {
  const [daysWorked, setDaysWorked] = useState(rowData.daysWorked);
  const [dayRate, setRate] = useState(rowData.dayRate);

  const daysWorkedHandler = (e) => {
    setDaysWorked(e.target.value);
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };
  return (
    <tr>
      <td className="input">{rowData.name}</td>
      <td className="input">{rowData.lastName}</td>
      <td className="input">
        <input value={daysWorked} onChange={daysWorkedHandler} />
      </td>
      <td className="input">
        <input value={dayRate} onChange={rateHandler} />
      </td>
      <td className="sum">{daysWorked * dayRate}</td>
    </tr>
  );
}
