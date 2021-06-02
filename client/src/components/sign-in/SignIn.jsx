import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import Button from "../button/Button";
import FormInput from "../form-input/FormInput";

import {
  SignInTitle,
  ErrorMessage,
  SignInContainer,
  ButtonsBarContainer,
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      signInError: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      this.setState({ signInError: error });
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        {this.state.signInError && (
          <ErrorMessage>{this.state.signInError.message}</ErrorMessage>
        )}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonsBarContainer>
            <Button type="submit"> Sign in </Button>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
