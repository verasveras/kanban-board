import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  createBacklogItem,
  createInProgressItem,
  deleteBacklogItem,
  deleteInProgressItem,
  hideModal,
} from '../../actions';

export class ModalContainer extends React.Component {
  render() {
    const domElement = document.getElementById('root');
    return ReactDOM.createPortal(this.props.children, domElement);
  }
}

export class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      title: '',
      description: '',
      dueDate: '',
    };
  }

  deleteTask = () => {
    // if deleting an existing task, it was probably not changed,
    // so grab the info off of global state and not component state
    const { title, description, dueDate, id } = this.props.taskInFocus;
    const payload = {
      task: { title, description, dueDate, id },
      taskType: this.props.createType,
    };
    this.props.deleteTask(payload);
  };

  handleEnterKey = (event) => {
    event.preventDefault();
    if (event.key === 'Enter'){
      this.handleCreateTaskClick();
    }
  };

  handleDeleteTaskClick = () => {
    this.deleteTask();
    this.props.hideModal();
  };

  handleInputChange = event => {
    const inputName = event.currentTarget.id.split('-')[0];
    this.setState({
      [inputName]: event.currentTarget.value,
    });
  };

  handleCreateTaskClick = () => {
    let { title, description, dueDate } = this.state;
    const isEditMode = this.props.modalMode == 'edit';

    // if not in edit mode, that means there has to be task info
    // on state, since there's no previous taks to grab it from
    if ((!title || !dueDate) && !isEditMode) {
      this.setState({
        isValid: false,
      });
      return;
    }

    // if something isn't on state that means they didnt update it
    // grab old value
    if ((!title || !dueDate) && isEditMode) {
      title = title ? title : this.props.taskInFocus.title;
      dueDate = dueDate ? dueDate : this.props.taskInFocus.dueDate;
      description = description
        ? description
        : this.props.taskInFocus.description;
    }

    // editing a task is deleting it and creating a new one with the new
    // information. so we have to delete the ask if the modal is in edit mode.
    if (isEditMode) {
      this.deleteTask();
    }

    const payload = {
      task: { title, description, dueDate },
      taskType: this.props.createType,
    };

    this.props.createTask(payload);
    this.props.hideModal();
  };

  render() {
    const isEditMode = this.props.modalMode === 'edit';

    return (
      <div className="modal">
        <div className="modal__title">Create New Task</div>
        <form onKeyPress={this.handleEnterKey}>
          <input
            className="input"
            type="text"
            placeholder="Title"
            id="title-input"
            {...(isEditMode
              ? { defaultValue: this.props.taskInFocus.title }
              : {})}
            onChange={this.handleInputChange}
          />
          <textarea
            className="input"
            placeholder="Description (optional)"
            id="description-input"
            {...(isEditMode
              ? { defaultValue: this.props.taskInFocus.description }
              : {})}
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            type="date"
            placeholder="Date"
            id="dueDate-input"
            {...(isEditMode
              ? { defaultValue: this.props.taskInFocus.dueDate }
              : {})}
            onChange={this.handleInputChange}
          />
        </form>
        {!this.state.isValid && (
          <div className="modal__alert">
            You need a task name and due date to create a task!
          </div>
        )}
        <div className="modal__footer">
          {isEditMode && (
            <div
              className="button button__delete"
              onClick={this.handleDeleteTaskClick}
            >
              Delete
            </div>
          )}
          <div className="button button__cancel" onClick={this.props.hideModal}>
            Cancel
          </div>
          <div
            className="button button__confirm"
            onClick={this.handleCreateTaskClick}
          >
            {isEditMode ? 'Edit' : 'Create'}
          </div>
        </div>
      </div>
    );
  }
}

const taskTypeToCreateActionMap = {
  Backlog: createBacklogItem,
  'In Progress': createInProgressItem,
};

const taskTypeToDeleteActionMap = {
  Backlog: deleteBacklogItem,
  'In Progress': deleteInProgressItem,
};

const mapStateToProps = state => ({
  createType: state.createType,
  modalMode: state.modalMode,
  taskInFocus: state.taskInFocus,
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(hideModal());
  },
  createTask({ task, taskType }) {
    const action = taskTypeToCreateActionMap[taskType];
    dispatch(action(task));
  },
  deleteTask({ task, taskType }) {
    const action = taskTypeToDeleteActionMap[taskType];
    dispatch(action(task));
  },
});

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalComponent);
