import React, { useState } from 'react';

const Container = 'container d-flex flex-column';
const Button = 'btn btn-primary';

export const Form = ({ handleSubmit }) => {
  const [input, setInput] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };
  return (
    // <div className={Container}>
    <form onSubmit={onFormSubmit}>
      <textarea
        value={input}
        style={{ resize: 'none' }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={Button}>
        Translate
      </button>
    </form>
    // </div>
  );
};
