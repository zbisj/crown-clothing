import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      
      // signin with emai and passowrd
      await auth.signInWithEmailAndPassword(email, password);
      // clearing state
      this.setState({email: '', password: ''})

    } catch (error) {
      console.log(error);
    }

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

          <div className="buttons">
            <Button type="submit">Sign In</ Button>
            <Button
              isGoogleSignIn
              onClick={ signInWithGoogle }
            >
              Sign In with google
            </ Button>
          </ div>

        </form>
      </div>

    );

  };

};

export default SignIn;
