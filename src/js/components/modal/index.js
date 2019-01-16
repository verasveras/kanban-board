import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideModal } from '../../reducers/actions';

export class ModalContainer extends React.Component {
  render() {
    const domElement = document.getElementById('root');
    return ReactDOM.createPortal(this.props.children, domElement);
  }
}

export class ModalComponent extends React.Component {
  render() {
    return (
      <div className="modal">
        <div>Create New Task</div>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <div>
          <div onClick={this.props.hideModal}> Cancel </div>
          <div> Create </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(hideModal());
  },
});

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalComponent);
