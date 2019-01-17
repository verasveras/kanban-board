import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  createBacklogItem,
  createInProgressItem,
  hideModal,
} from '../../reducers/actions';

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
      title: '',
      description: '',
      dueDate: '',
    };
  }

  handleInputChange = event => {
    const inputName = event.currentTarget.id.split('-')[0];
    this.setState({
      [inputName]: event.currentTarget.value,
    });
  };

  handleCreateCard = () => {
    const { title, description, dueDate } = this.state;
    const payload = {
      task: { title, description, dueDate },
      taskType: this.props.createType,
    };
    this.props.createTask(payload);
    this.props.hideModal();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal__title">Create New Task</div>
        <form>
          <input
            className="input"
            type="text"
            placeholder="Title"
            id="title-input"
            onChange={this.handleInputChange}
          />
          <textarea
            className="input"
            placeholder="Description (optional)"
            id="description-input"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Date"
            id="dueDate-input"
            onChange={this.handleInputChange}
          />
        </form>
        <div className="modal__footer">
          <div className="button button__cancel" onClick={this.props.hideModal}>
            Cancel
          </div>
          <div
            className="button button__confirm"
            onClick={this.handleCreateCard}
          >
            Create
          </div>
        </div>
      </div>
    );
  }
}

const taskTypeToActionMap = {
  Backlog: createBacklogItem,
  'In Progress': createInProgressItem,
};

const mapStateToProps = state => ({
  createType: state.createType,
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(hideModal());
  },
  createTask({ task, taskType }) {
    const action = taskTypeToActionMap[taskType];
    dispatch(action(task));
  },
});

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalComponent);
