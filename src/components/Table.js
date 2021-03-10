import React from 'react';

export const Table = ({ list }) => {
  const renderTable = () => {
    return list.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.value}</td>
          <td>{item.frequency}</td>
        </tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Word</th>
          <th scope="col">Frequency</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
};
