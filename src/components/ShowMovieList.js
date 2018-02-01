//show movie

import React, {Component} from 'react';

class ShowMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.movieList
    }
  }

  renderMovies() {
    let divId = 1
    return this.state.movieList.map(movie => {
      return (
        <div
          className="ShowMovieListItem"
          id={`movie${divId}`}
          onClick={() => this.handleClick(movie.id)}>
          <div id={`title${divId}`}>{movie.title}</div>
          <div id={`overview${divId}`} className="overview">{movie.overview}</div>
          <img id={`img${divId++}`} src={`http://image.tmdb.org/t/p/w342${movie.backdrop_path}`}/>
        </div>)
    })
  }

  handleClick(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        movieList: false,
        movie: data
      })
    })
  }

  render() {
    return (
      <div className="ShowMovieList">
        {this.state.movieList ? this.renderMovies() : ""}
        {this.state.movie ? <ShowMovie movie={this.state.movie}/> : ""}
      </div>);
  }
}

export default ShowMovieList;
