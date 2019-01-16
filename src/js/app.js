import React from 'react';
import Column from './components/column';
import { ModalContainer, Modal } from './components/modal';
import { connect } from 'react-redux';
import { showModal } from './reducers/actions';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Column
          name="Backlog"
          handleCreateTask={this.props.showModal}
          showCreateButton
        />
        <Column
          name="In Progress"
          handleCreateTask={this.props.showModal}
          showCreateButton
        />
        <Column name="Completed" handleCreateTask={this.props.showModal} />
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
});

const mapDispatchToProps = dispatch => ({
  showModal() {
    dispatch(showModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
