import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import Header from './Header';


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
    axios.post('/favorites', {
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
        newId: res.data.movie.id,
        fireRedirect: true,
      })
      console.log('we did it boizzz', res)
      // console.log('new state' this.state.newId)
    })
    .catch(err=> console.log(err))
    e.target.reset()
  }
  render(){
    return(
      <div className="add">

        <Header />

        <div id="add-entry">Add an entry</div>

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
            placeholder="Poster URL"
            name="poster_path"
            value={this.state.poster_path}
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            type="text"
            name="overview"
            placeholder="Overview"
            value={this.state.overview}
            onChange={this.handleInputChange}>
          </textarea>
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
            placeholder="Genre"
            name="genres"
            value={this.state.genres}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="number"
            placeholder="Run Time"
            name="runtime"
            value={this.state.runtime}
            onChange={this.handleInputChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.fireRedirect
          ? <Redirect to={`/favorites/${this.state.newId}`} />
        : '' }

      </div>
    )
  }
}

export default FavoriteAdd;
