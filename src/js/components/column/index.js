import React from 'react';
import Task from '../task';

export default class Column extends React.Component {
  handleCreateTaskClick = () => {
    this.props.handleCreateTaskClick(this.props.name);
  };

  render() {
    // do this in a map
    const buttonColor = this.props.name === 'Backlog' ? 'blue' : 'purple';
    return (
      <div className="column">
        <div className="column__title">{this.props.name}</div>
        {this.props.tasks.map(task => (
          <Task task={task} type={this.props.name} key={task.id} />
        ))}
        {this.props.showCreateButton && (
          <div
            className={`create-button button__${buttonColor}`}
            onClick={this.handleCreateTaskClick}
          >
            Create Task
          </div>
        )}
      </div>
    );
  }
}
