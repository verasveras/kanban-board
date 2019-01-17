import React from 'react';

export default class Task extends React.Component {
  getButtonsForTask = () => {};
  render() {
    const description = this.props.description
      ? this.props.description
      : 'N/A.';

    const dueDateText = `Due ${this.props.dueDate}`;

    return (
      <div className="task">
        <div className="task__title">{this.props.title}</div>
        <div className="task__description">{description}</div>
        <div className="task__date">
          <i class="fa fa-calendar-day" />
          {dueDateText}
        </div>
      </div>
    );
  }
}
