import React, { Component } from 'react';


function IsWatchedTab (props){

  function isWatchedClick(){
    props.renderWatched();
  }
  
  function toWatchClick(){
    props.renderToWatch();
  }
    return (
      <span className="tabs">
        <span className="isWatched" onClick={isWatchedClick.bind(this)}>Watched</span>
        <span className="toWatch" onClick={toWatchClick.bind(this)}>ToWatch</span>
      </span>
    )
}

export default IsWatchedTab;