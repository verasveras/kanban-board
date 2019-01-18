import React from 'react';
import { connect } from 'react-redux';
import {
  createBacklogItem,
  deleteBacklogItem,
  createInProgressItem,
  deleteInProgressItem,
  createCompletedItem,
  deleteCompletedItem,
} from '../../actions';

class Buttons extends React.Component {
  handleClickGoPrevious = () => {
    switch (this.props.taskType) {
      case 'In Progress':
        this.props.moveFromInProgressToBacklog(this.props.task);
        break;
      case 'Completed':
        this.props.moveFromCompleteToInProgress(this.props.task);
        break;
    }
  };

  handleClickGoNext = () => {
    switch (this.props.taskType) {
      case 'In Progress':
        this.props.moveFromInProgressToComplete(this.props.task);
        break;
      case 'Backlog':
        this.props.moveFromBacklogToInProgress(this.props.task);
        break;
    }
  };

  render() {
    let button = null;
    switch (this.props.taskType) {
      case 'Backlog':
        button = (
          <div className="task-buttons" onClick={this.handleClickGoNext}>
            <div className="button__purple button__full"> Start </div>
          </div>
        );
        break;
      case 'In Progress':
        button = (
          <div className="task-buttons">
            <div
              className="button__blue button__half button__left"
              onClick={this.handleClickGoPrevious}
            >
              Backlog
            </div>
            <div
              className="button__green button__half button__right"
              onClick={this.handleClickGoNext}
            >
              Complete
            </div>
          </div>
        );
        break;
      case 'Completed':
        button = (
          <div className="task-buttons">
            <div
              className="button__blue button__full"
              onClick={this.handleClickGoPrevious}
            >
              Undo
            </div>
          </div>
        );
        break;
    }
    return button;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  moveFromBacklogToInProgress(payload) {
    dispatch(deleteBacklogItem(payload));
    dispatch(createInProgressItem(payload));
  },
  moveFromInProgressToBacklog(payload) {
    dispatch(deleteInProgressItem(payload));
    dispatch(createBacklogItem(payload));
  },
  moveFromInProgressToComplete(payload) {
    dispatch(deleteInProgressItem(payload));
    dispatch(createCompletedItem(payload));
  },
  moveFromCompleteToInProgress(payload) {
    dispatch(deleteCompletedItem(payload));
    dispatch(createInProgressItem(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);
