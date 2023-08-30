import React from 'react';

const TodoItem = ({ item, status }) => (
  <div>
    {item.title} - {status ? 'Done' : 'Not done'}
  </div>
);

export default TodoItem;
