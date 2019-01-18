import React from 'react';
import Buttons from './buttons';

export default class Task extends React.Component {
  render() {
    const { task } = this.props;
    const isCompleted = this.props.type === 'Completed';
    const description = task.description ? task.description : 'N/A';
    const dueDateText = `Due ${task.dueDate}`;

    return (
      <div className={`task ${isCompleted ? 'task-completed' : ''}`}>
        <div className="task__title">{task.title}</div>
        <div className="task__description">{description}</div>
        <div
          className={`task__date ${isCompleted ? 'task__date-completed' : ''}`}
        >
          <i className="fa fa-calendar-day" />
          {dueDateText}
        </div>
        <Buttons taskType={this.props.type} task={task} />
      </div>
    );
  }
}
