import React, { Component } from 'react';
import isWatchedTab from './isWatchedTab.jsx';

class Movie extends Component{
  constructor(props) {
    super(props);
  }

  onButtonClick(){
    this.props.watchedClick(this.props.index);
  }

  render() {
    let watched;
    if (this.props.watched) {
      this.text = "Watched!"
      watched = <span className="watched" onClick={this.onButtonClick.bind(this)}>{this.text}</span>
    } else if (this.props.watched === ""){
      watched = "";
    }else {
      this.text = "To Watch";
      watched = <span className="watched" onClick={this.onButtonClick.bind(this)}>{this.text}</span>
    }
    return (
      <div>
      <span className="title"> {this.props.title} </span>
      {watched}
      </div>
    )}
}

export default Movie;