import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

class SignIn extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }


  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

  }

  render() {

    return (

      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={ this.handleSubmit }>

          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={ this.handleChange }
          />

          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={ this.handleChange }
          />

          <Button type="submit">Sign In</ Button>
          <Button  onClick={ signInWithGoogle }>Sign In with google </ Button>

        </form>
      </div>

    );

  };

};

export default SignIn;
