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
    // map the component type to the appropriate behavior,
    // this lets us use more descriptiivn function names
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
    // button styling and behavior is differnt enough to warrant different
    // jsx, be explicit in what's getting rendered.
    switch (this.props.taskType) {
      case 'Backlog':
        button = (
          <div className="task-buttons" onClick={this.handleClickGoNext}>
            <div className="button button__purple button__full"> Start </div>
          </div>
        );
        break;
      case 'In Progress':
        button = (
          <div className="task-buttons">
            <div
              className="button button__blue button__half button__left"
              onClick={this.handleClickGoPrevious}
            >
              Backlog
            </div>
            <div
              className="button button__green button__half button__right"
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
              className="button button__blue button__full"
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
