import React, { useState } from 'react';

const GroupCreationForm = ({ onCreateGroup }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from !== '' && to !== '') {
      onCreateGroup({ from: parseInt(from), to: parseInt(to) });
      setFrom('');
      setTo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        From:
        <input type="number" value={from} onChange={(e) => setFrom(e.target.value)} />
        To:
        <input type="number" value={to} onChange={(e) => setTo(e.target.value)} />
        <button type="submit">Add Group</button>
      </form>
    </div>
  );
};

export default GroupCreationForm;
