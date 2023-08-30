// TodoGroup.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import fetchItemStatus from './api'; 

const TodoGroup = ({ group, onDelete }) => {
  const [itemStatuses, setItemStatuses] = useState(Array(group.items.length).fill(false));
  const [showStatus, setShowStatus] = useState(false);

  const handleShowStatus = async () => {
    const statuses = await Promise.all(group.items.map((item) => fetchItemStatus(item.id)));
    setItemStatuses(statuses);
    setShowStatus(true);
  };

  return (
    <div>
      <h2>Group {group.from} to {group.to}</h2>
      {group.items.map((item, index) => (
        <TodoItem key={item.id} item={item} status={showStatus ? itemStatuses[index] : null} />
      ))}
      <button onClick={onDelete}>Delete Group</button>
      <button onClick={handleShowStatus}>Show Status</button>
    </div>
  );
};

export default TodoGroup;
