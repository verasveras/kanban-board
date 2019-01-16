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
        <div className="modal__title">Create New Task</div>
        <form>
          <input className="input" type="text" placeholder="Title" />
          <textarea className="input" placeholder="Description (optional)" />
          <input className="input" type="text" placeholder="Date" />
        </form>
        <div className="modal__footer">
          <div className="button button__cancel" onClick={this.props.hideModal}>
            {' '}
            Cancel{' '}
          </div>
          <div
            className="button button__confirm"
            onClick={() => {
              alert('create!');
            }}
          >
            Create
          </div>
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
