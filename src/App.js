import React, { useState } from 'react';
import GroupCreationForm from './GroupCreationForm';
import TodoGroup from './TodoGroup';
import todoData from './data'; 

const App = () => {
  const [groups, setGroups] = useState([{ from: 1, to: 10, items: todoData }]);

  const handleCreateGroup = ({ from, to }) => {
    const newGroup = {
      from,
      to,
      items: todoData.slice(from - 1, to),
    };
    setGroups([...groups, newGroup]);
  };

  const handleDeleteGroup = (index) => {
    const updatedGroups = groups.filter((group, i) => i !== index);
    setGroups(updatedGroups);
  };

  return (
    <div>
      <GroupCreationForm onCreateGroup={handleCreateGroup} />
      {groups.map((group, index) => (
        <TodoGroup key={index} group={group} onDelete={() => handleDeleteGroup(index)} />
      ))}
    </div>
  );
};

export default App;
