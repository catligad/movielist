import React, { Component } from 'react';
import Movie from './Movie.jsx';

function List(props) {
    return (
      <div className="list">
      {props.movies.map( (item, index) => (
        <Movie key={index} index={index} title={item.title} watched={item.watched} watchedClick={props.watchedClick} />
      ))
      }
      </div>
    )
}

export default List;