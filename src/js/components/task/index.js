import React from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons';
import { showModalEditMode } from '../../actions';

class Task extends React.Component {
  handleEditClick = () => {
    this.props.showModalEditMode({
      task: this.props.task,
      taskType: this.props.type,
    });
  };

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
          <div>
            <i className="fa fa-calendar-day" />
            {dueDateText}
          </div>
          {!isCompleted && (
            <i className="fa fa-pencil-alt" onClick={this.handleEditClick} />
          )}
        </div>
        <Buttons taskType={this.props.type} task={task} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  showModalEditMode(payload) {
    dispatch(showModalEditMode(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
