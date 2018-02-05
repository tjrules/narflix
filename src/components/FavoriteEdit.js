import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';

class FavMovieEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imdb_id: '',
      overview: '',
      poster_path: '',
      runtime: '',
      tagline: '',
      genres: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this)
  }

componentDidMount() {
  axios.get(`/favorites/${this.props.match.params.id}`)
  .then((res) =>{
    const favorites = res.data.movies;
    this.setState({
      title: favorites.title,
      imdb_id: favorites.imdb_id,
      overview: favorites.overview,
      poster_path: favorites.poster_path,
      runtime: favorites.runtime,
      tagline: favorites.tagline,
      genres: favorites.genres
    })
  }).catch(err => console.log(err));
}

  deleteMovie() {
    axios.delete(`/favorites/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        fireRedirect:true
      })
    }).catch(err => { console.log(err)})
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .put(`/favorites/${this.props.match.params.id}`, {
        title: this.state.title,
        imdb_id: this.state.imdb_id,
        overview: this.state.overview,
        poster_path: this.state.poster_path,
        runtime: this.state.runtime,
        tagline: this.state.tagline,
        genres: this.state.genres,
      })
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    // console.log(props)
    console.log(this.state)
    return (
      <div className="FavoriteEdit">
        <Header />
        <div id="edit">Edit Entry</div>
          <form onSubmit={this.handleFormSubmit}>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            <br />
            <input
                type="text"
                placeholder="IMDB id"
                name="imdb_id"
                value={this.state.imdb_id}
                onChange={this.handleInputChange}
              />
            <br />
            <textarea
                type="text"
                placeholder="Overview"
                name="overview"
                value={this.state.overview}
                onChange={this.handleInputChange}>
              </textarea>
            <br />
            <input
                type="text"
                placeholder="Poster url"
                name="poster_path"
                value={this.state.poster_path}
                onChange={this.handleInputChange}
              />
            <br />
            <input
                type="number"
                placeholder="Runtime"
                name="runtime"
                value={this.state.runtime}
                onChange={this.handleInputChange}
              />
            <br />
            <textarea
                type="text"
                placeholder="Tagline"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleInputChange}>
              </textarea>
            <br />
            <input
                type="text"
                placeholder="Genres"
                name="genres"
                value={this.state.genres}
                onChange={this.handleInputChange}
              />
            <br />
            <input type="submit" value="Submit!" />
            <br />
            <input type="submit" className='delete' onClick={this.deleteMovie} value="Delete"/>
          </form>

          {this.state.fireRedirect
            ? <Redirect push to={`/favorites/${this.state.newId}`} />
            : ''}
      </div>
    )
  }
}

export default FavMovieEditForm;
