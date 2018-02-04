import React, {Component} from 'react';
import Home from './Home';
import SearchResults from './SearchResults';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US&query=${this.state.name}`)
    .then(data => {
      this.setState({
        results: data.data.results,
        totalPages: data.data.total_pages
      })
    })
    .catch(err => console.log(data, err))
    e.target.reset()
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]:value})
  }


  render() {
    return(
      <div className="Search">
        <form action="/" onSubmit={this.handleSubmit}>
          <input id="text" type="text" name="name" onChange={this.handleChange} required />
          <input id="submit" type="submit" value="Search" onClick={this.props.take}/>
        </form>
        {this.state.results ? <SearchResults results={this.state.results} searchQuery={this.state.name} totalPages={this.state.totalPages} /> : ""}
      </div>
    )
  }
}

export default Search;
