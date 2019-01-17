import React from 'react';

export default class Buttons extends React.Component {
  render() {
    if (this.props.taskType === 'Backlog') {
      return (
        <div className="task-buttons">
          {' '}
          <div className="button__purple button__full"> Start </div>{' '}
        </div>
      );
    } else if (this.props.taskType === 'In Progress') {
      return (
        <div className="task-buttons">
          {' '}
          <div className="button__blue button__half"> Backlog </div>{' '}
          <div className="button__green button__half"> Complete </div>
        </div>
      );
    } else if (this.props.taskType === 'Completed') {
      return (
        <div className="task-buttons">
          {' '}
          <div className="button__blue button__full"> Undo </div>
        </div>
      );
    }
  }
}
