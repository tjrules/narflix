import React from 'react';
import Header from './Header';
import Search from './Search';
import Genre from './Genre';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      noSearch: true
    }
    this.search = this.search.bind(this);
  }

  search() {
    this.setState({
      noSearch: false
    })
  }

  render() {
    return(
      <div className="Home">
        <Header />
        <Search searchMethod={this.search} noSearch={this.state.noSearch}/>
        {this.state.noSearch ? <Genre /> : ""}
      </div>
    )
  }
}

export default Home;
