import React from 'react';
import Column from './components/column';
import { ModalContainer, Modal } from './components/modal';
import { connect } from 'react-redux';
import { showModal } from './actions';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Column
          name="Backlog"
          handleCreateTaskClick={this.props.showModal}
          showCreateButton
          tasks={this.props.backlogTasks}
        />
        <Column
          name="In Progress"
          handleCreateTaskClick={this.props.showModal}
          showCreateButton
          tasks={this.props.inProgressTasks}
        />
        <Column
          name="Completed"
          handleCreateTaskClick={this.props.showModal}
          tasks={this.props.completedTasks}
        />
        {this.props.modalVisibile && (
          <ModalContainer>
            <Modal />
          </ModalContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalVisibile: state.showModal,
  backlogTasks: state.backlog,
  inProgressTasks: state.inProgress,
  completedTasks: state.completed,
});

const mapDispatchToProps = dispatch => ({
  showModal(payload) {
    dispatch(showModal(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
