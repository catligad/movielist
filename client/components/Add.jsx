import React, { Component } from 'react';

class Add extends Component{
  constructor(props){
    super(props)
    this.state={
      text: "",
    }
  }

  onButtonClick(){
    this.props.click(this.state.text);
  }

  onFormChange(event){
    this.setState({
      text: event.target.value,
    })
  }

  render(){
    return(
      <div className="addForm">
      <input type="text" placeholder="Add New Movies Here..." onChange={this.onFormChange.bind(this)} />
      <button className="addBtn" onClick={this.onButtonClick.bind(this)}>Go!</button>
      </div>
    )
  }
}

export default Add;