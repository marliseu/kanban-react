import React, { Component } from 'react';
import marked from 'marked';


class CheckList extends Component {
  //for each task item, create a list item containing a checkbox, task name, and delete button
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className="checklist_task">
        <input type="checkbox" default checked={task.done} />
        {task.name}
        <a href="#" className="checklist_task--remove" />
      </li>
    ));

    //render an unordered list with tasks (task list items created above) inside
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default CheckList;
