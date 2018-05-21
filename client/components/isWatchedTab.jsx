import React, { Component } from 'react';

class IsWatchedTab extends Component{
  constructor(props) {
    super(props);
  }

  isWatchedClick(){
    this.props.renderWatched();
  }

  toWatchClick(){
    this.props.renderToWatch();
  }

  render() {
    return (
      <span className="tabs">
        <span className="isWatched" onClick={this.isWatchedClick.bind(this)}>Watched</span>
        <span className="toWatch" onClick={this.toWatchClick.bind(this)}>ToWatch</span>
      </span>
    )
  }

}

export default IsWatchedTab;