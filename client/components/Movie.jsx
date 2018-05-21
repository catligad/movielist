import React, { Component } from 'react';
import isWatchedTab from './isWatchedTab.jsx';

function Movie (props){
  function onButtonClick(){
    props.watchedClick(props.index);
  }

  let watched;
  if (props.watched) {
    let text = "Watched!"
    watched = <span className="watched" onClick={onButtonClick.bind(this)}>{text}</span>
  } else if (props.watched === ""){
    watched = "";
  }else {
    let text = "To Watch";
    watched = <span className="watched" onClick={onButtonClick.bind(this)}>{text}</span>
  }

  return (
    <div>
    <span className="title"> {props.title} </span>
    {watched}
    </div>
  )
}

export default Movie;