import React, { Component, PropTypes } from 'react';
import marked from 'marked';


class CheckList extends Component {
  //for each task item, create a list item containing a checkbox, task name, and delete button
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li key={task.id} className="checklist_task">
        <input type="checkbox" default checked={task.done} />
        {task.name}
        <a href="#" className="checklist_task--remove" />
      </li>
    ));

    //render an unordered list with tasks (task list items created above) inside
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" />
      </div>
    );
  }
};
CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;
