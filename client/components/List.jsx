import React, { Component } from 'react';
import Movie from './Movie.jsx';

class List extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
      {this.props.movies.map( (item, index) => (
        <Movie key={index} index={index} title={item.title} watched={item.watched} watchedClick={this.props.watchedClick} />
      ))
      }
      </div>
    )
  }

}

export default List;