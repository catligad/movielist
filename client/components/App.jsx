import React, { Component } from 'react';
import axios from "axios";
import '../styles/App.css';
import List from './List.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import IsWatchedTab from './isWatchedTab.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesRendered:[],
    }
  }

  componentWillMount() {
    axios.get(`http://127.0.0.1:3000/lists/movies`).then((response) => {
      let movieList = response.data;
      this.setState({
        movies: movieList,
        moviesRendered: movieList
      })
    })
    .catch((err) => console.log(err))
  }
  
  searchClick(input){
    if (input === null || input === undefined || input=== "") {
      this.setState({
        moviesRendered: this.state.movies,
      })
    } else {
      let target=[];
      input = input.toLowerCase();
      this.state.movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(input)) {
          target.push(movie);
        } 
      });
      if (target === ""){
        this.setState({
          moviesRendered: [{title: 'No Movies Found!', watched: ""}]
        });
      } else {
        this.setState({
          moviesRendered: target
        });
      }
    }
  }

  addClick(input){
    let isAlreadyInList = false;
    this.state.movies.forEach( movie => {
      if (JSON.stringify(movie) === JSON.stringify({title: input})){
        isAlreadyInList = true;
      }
    });
    if (!isAlreadyInList) {
      let movieToAdd = {'title': input, watched: false};
      
      axios.post('http://127.0.0.1:3000/lists/movies', movieToAdd).then( (response) => {
        console.log('movie posted!');
      });

      axios.get(`http://127.0.0.1:3000/lists/movies`).then((response) => {
      let movieList = response.data;
      this.setState({
        movies: movieList,
        moviesRendered: movieList
      })
    })
    .catch((err) => console.log(err))
    }
  }

  watchedClick(index){
    this.state.movies[index].watched = !this.state.movies[index].watched;
    this.setState({
      moviesRendered: this.state.movies,
    })
  }

  rerenderWholeList(){
    this.setState({
      moviesRendered: this.state.movies,
    })
  }

  renderWatched(){
    let toRender = [];
    this.state.movies.forEach( movie => {
      if (movie.watched){
        toRender.push(movie);
      }
    });
    this.setState({
      moviesRendered: toRender,
    })
  }

  renderToWatch(){
    let toRender = [];
    this.state.movies.forEach( movie => {
      if (!movie.watched){
        toRender.push(movie);
      }
    });
    this.setState({
      moviesRendered: toRender,
    })
  }

  render() {
    return (
      <div className="app">
        <div className="listTitle" onClick={this.rerenderWholeList.bind(this)}> Cat's Movie List: </div>
        <div className="add-bar">
          <Add click={this.addClick.bind(this)} rerender={this.rerenderWholeList.bind(this)} />
        </div>
        <div className="nav-bar">
          <IsWatchedTab renderWatched={this.renderWatched.bind(this)} renderToWatch={this.renderToWatch.bind(this)} />
          <Search click={this.searchClick.bind(this)} />
          </div>
          <List movies={this.state.moviesRendered} watchedClick={this.watchedClick.bind(this)} />
      </div>
    );
  }
}

export default App;
