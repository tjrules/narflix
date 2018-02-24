import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Header from './Header';

class UserLoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedInName: '',
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login', {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
    })
    .then( data => {
      console.log('thennnnnnn');
      this.setState({
        fireRedirect: true
      })
      })
    .catch(err => console.log(err))
    e.target.reset()
  }


  render() {
    console.log(this.state)
    return (
      <div className='sign-in'>

        <Header />

        {(this.state.loggedInName) ? <div id="welcome">Welcome, {this.state.loggedInName}</div> : <div id="log-in">Please Log In</div>}

        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} name='username' placeholder='username' />
          <br />
          <input type='text' onChange={this.handleChange} name='password' placeholder='password' />
          <br />
          <input type='submit' value='Sign In' />
        </form>

        {this.state.fireRedirect ? <Redirect to='/' /> : ''}
      </div>
    )
  }
}

export default UserLoginPage;
