import React from 'react';
import Header from './Header';
import Genre from './Genre';

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <Header />
        <Genre />
      </div>
    )
  }
}

export default Home;
