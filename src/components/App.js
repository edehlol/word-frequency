import React, { useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';

export const getFrequency = (array) => {
  let frequencies = [];
  array.forEach((item) => {
    item = item.replace(/\W+/gm, '');
    if (!frequencies.find((obj) => obj.value === item)) {
      frequencies.push({ value: item, frequency: 1 });
    } else {
      frequencies.find((obj) => obj.value === item).frequency += 1;
    }
  });
  return frequencies.sort((a, b) => b.frequency - a.frequency);
};

const App = () => {
  const [list, setList] = useState(null);
  const handleSubmit = (input) => {
    const frequency = getFrequency(input.split(' '));
    setList(frequency);
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      {list && <Table list={list} />}
    </div>
  );
};

export default App;
