import React, { Component } from 'react';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

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
      newId: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      .post(`/favorites/${this.props.match.params.id}`, {
        title: this.props.movie.title,
        imdb_id: this.props.movie.imdb_id,
        overview: this.props.movie.overview,
        poster_path: this.props.movie.poster_path,
        runtime: this.props.movie.runtime,
        tagline: this.props.movie.tagline,
        genres: this.props.movie.genres,
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    // console.log(props)
    console.log(this.state)
    return (
      <div className="edit">
        <form onSubmit={() => this.handleFormSubmit}>
          <label>
            Title
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            IMDB id
            <input
              type="text"
              placeholder="IMDB id"
              name="imdb_id"
              value={this.state.imdb_id}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Overview
            <input
              type="text"
              placeholder="Overview"
              name="overview"
              value={this.state.overview}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Poster url
            <input
              type="text"
              placeholder="Poster url"
              name="poster_path"
              value={this.state.poster_path}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Runtime
            <input
              type="number"
              placeholder="Runtime"
              name="runtime"
              value={this.state.runtime}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Tagline
            <input
              type="text"
              placeholder="Tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Genres
            <input
              type="text"
              placeholder="Genres"
              name="genres"
              value={this.state.genres}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/favorites/${this.state.newId}`} />
          : ''}
      </div>
    )
  }
}

export default FavMovieEditForm;
