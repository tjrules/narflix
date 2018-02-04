import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserLoginPage from './components/UserLoginPage';
import UserSignUpPage from './components/UserSignUpPage';
import Header from './components/Header';
import FavoriteAdd from './components/FavoriteAdd';
import FavoriteList from './components/FavoriteList';
import FavoriteEdit from './components/FavoriteEdit';
import Genre from './components/Genre';
import ShowMovieList from './components/ShowMovieList';
import ShowMovie from './components/ShowMovie';
import FavoriteMovie from './components/FavoriteMovie';
import Home from './components/Home';




class App extends Component {
  render(){
    return (
  <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={UserLoginPage} />
          <Route path='/register' component={UserSignUpPage} />
          <Route path='/favorites' component={FavoriteList} />
          <Route path='/:id/edit' component={FavoriteEdit}/>
          <Route path='/favorites/:id' component={FavoriteMovie} />
          <Route path='/movies' component={ShowMovieList} />
          <Route path='/movies/:id' component={ShowMovie} />
          <Route path='/add' component={FavoriteAdd}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
  </Router>
      )
  }
}

export default App;
