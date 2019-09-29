import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import Auth from './components/auth/Auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };

  }
  // initiating a new method to unsubcribe from google auth
  unsubcribeFromAuth = null;

  componentDidMount() {
    // changing unsubcribeFromAuth from null to the connect state to the current signed in user when the this App component is mounted to the DOM
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        // userRef here points to the document for logged in user
        const userRef = await createUserProfileDocument(userAuth);

        // we are now getting the actual data within the document and using it to set state for the app
        userRef.onSnapshot(snapshot => {

          this.setState({
            id: snapshot.id,
            ...snapshot.data()
          });

        });

      };
      // the code below will run only if there is no user signed in and the onAuthStateChanged function will return null as the value of userAuth there the code below is equivalent to:
      // this.setState({ currentUser: null})
      this.setState({ currentUser: userAuth});

    });

  };

  // hen the this App component is unmounted from the DOM we kill or unsubcribe the connection to the google auth serives to avoid data leaks
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {

    return (

      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" component={ Auth } />
        </Switch>
      </div>
    );

  };

};

export default App;
