import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';


class UserSignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedInName: '',
      fireRedirect: false,
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
    axios({
      method: 'POST',
      url: '/auth/register',
      data: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,

      }
    })
    .then( person => {
      console.log('got this back', person.data);
      this.setState({
        fireRedirect: true
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='sign-up'>
        <Header />

        <div id="join">Welcome! Join Narflix Here</div>

        <form onSubmit={this.handleSubmit}>

          <input type='text' onChange={this.handleChange} name='email' placeholder='email' />

          <br />

          <input type='text' onChange={this.handleChange} name='username' placeholder='username' />

          <br />

          <input type='text' onChange={this.handleChange} name='password' placeholder='password' />

          <br />

          <input type='submit' value='Sign Up' />
        </form>

        {this.state.fireRedirect ? <Redirect to='/' /> : ''}

      </div>
      )
  }
}


export default UserSignUpPage;
