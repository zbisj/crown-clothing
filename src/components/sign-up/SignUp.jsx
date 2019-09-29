import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      displayName: '',
      confirmPassword: ''
    };

  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't math");
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName});

      this.setState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

  };

  render() {

    const { email, password, displayName, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password.</span>
        <form
          className="sign-up-form" onSubmit={ this.handleSubmit }
        >
          <FormInput
            required
            type="text"
            name="displayName"
            label="Display Name"
            value={ displayName }
            handleChange={ this.handleChange }
          />
          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={ password }
            handleChange={ this.handleChange }
          />
          <FormInput
            required
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={ confirmPassword }
            handleChange={ this.handleChange }
          />
          <Button type="submit">
            SIGN UP
          </Button>
        </form>
      </div>
    );

  };

};

export default SignUp;
