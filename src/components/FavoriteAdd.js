import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class FavoriteAdd extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      poster_path:'',
      overview: '',
      tagline: '',
      genres:'',
      imdb_id:'',
      runtime: '',
      newId: '',
      fireRedirect: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]:value})
  }

  handleFormSubmit(e){
    e.preventDefault();
    axios.post('/narflixdb', {
      title: this.state.title,
      poster_path:this.state.poster_path,
      overview: this.state.overview,
      tagline: this.state.tagline,
      genres: this.state.genres,
      imdb_id:this.state.imdb_id,
      runtime: this.state.runtime,
    })
    .then(res=> {
      this.setState({
        newId: res.data.data.id,
        fireRedirect: true,
      })
    })
    .catch(err=> console.log(err))
    e.target.reset()
  }
  render(){
    return(
      <div className="add">
        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          <label>Poster</label>
            <input
              type="text"
              placeholder="Poster URL"
              name="poster_path"
              value={this.state.poster_path}
              onChange={this.handleInputChange}
            />
          <label>Overview</label>
            <input
              type="text"
              placeholder="Overview"
              name="overview"
              value={this.state.overview}
              onChange={this.handleInputChange}
            />
          <label>Tagline</label>
            <input
              type="text"
              placeholder="Tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleInputChange}
            />
          <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              name="genres"
              value={this.state.genres}
              onChange={this.handleInputChange}
            />
          <label>Run Time</label>
            <input
              type="number"
              placeholder="Run Time"
              name="runtime"
              value={this.state.runtime}
              onChange={this.handleInputChange}
            />
        </form>

      </div>
    )
  }
}

export default FavoriteAdd;
