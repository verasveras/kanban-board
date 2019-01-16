import React from 'react';
import { Connect } from 'react-redux';

// props :
// name
// tasks :
// handleCreateTask
// show createButton

export default class Column extends React.Component {
  render() {
    // do this in a map
    const buttonColor = this.props.name === 'Backlog' ? 'blue' : 'purple';
    return (
      <div className="column">
        <div className="column__title">{this.props.name}</div>
        {this.props.showCreateButton && (
          <div
            className={`create-button create-button__${buttonColor}`}
            onClick={this.props.handleCreateTask}
          >
            Create Task
          </div>
        )}
      </div>
    );
  }
}
