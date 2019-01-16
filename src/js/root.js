import React from 'react';
import Column from './components/column';

export default () => (
  <div className="app-container">
    <Column
      name="Backlog"
      handleCreateTask={() => {
        alert('yes');
      }}
      showCreateButton
    />
    <Column
      name="In Progress"
      handleCreateTask={() => {
        alert('yes');
      }}
      showCreateButton
    />
    <Column
      name="Completed"
      handleCreateTask={() => {
        alert('yes');
      }}
    />
  </div>
);
