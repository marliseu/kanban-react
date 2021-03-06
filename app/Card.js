import React, { Component, PropTypes } from 'react';
import marked from 'marked';

import CheckList from './CheckList';

let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`
      );
    }
  }
}

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    //If showDetails is true, render variable cardDetails containing the card_details div
    let cardDetails;
    if(this.state.showDetails){
      cardDetails = (
        <div className="card_details">
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    };

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div className={this.state.showDetails? "card_title card_title--is-open noselect" : "card_title noselect"
            } onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
};
Card.propTypes = {
  id: PropTypes.number,
  title: titlePropType,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Card;
