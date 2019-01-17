import React from 'react';

export default class Task extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.description}
        {this.props.dueDate}
      </div>
    );
  }
}
