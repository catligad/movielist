import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
    super(props);
    this.state={
      text: "",
    }
  }

  onButtonClick(){
    this.props.click(this.state.text);
  }

  onFormChange(event){
    this.setState({
      text: event.target.value
    });
  }

  render(){
    return(
      <span className="searchForm">
        <input type="text" placeholder="Search..." onChange={this.onFormChange.bind(this)} />
        <button type="submit" onClick={this.onButtonClick.bind(this)}>Go!</button>
      </span>
    )
  }
}

export default Search;