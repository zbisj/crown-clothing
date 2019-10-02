import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css'
import Auth from './components/auth/Auth';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { setCurrentUser } from './redux/actions/UserActions'
import { selectCurrentUser } from './redux/selectors/UserSelectors'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  // initiating a new method to unsubcribe from google auth
  unsubcribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    // changing unsubcribeFromAuth from null to the connect state to the current signed in user when the this App component is mounted to the DOM
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        // userRef here points to the document for logged in user
        const userRef = await createUserProfileDocument(userAuth);

        // we are now getting the actual data within the document and using it to set state for the app
        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

        });

      };
      // the code below will run only if there is no user signed in and the onAuthStateChanged function will return null as the value of userAuth there the code below is equivalent to:
      // this.setState({ currentUser: null})
      setCurrentUser(userAuth);

    });

  };

  // hen the this App component is unmounted from the DOM we kill or unsubcribe the connection to the google auth serives to avoid data leaks
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {

    const { currentUser } = this.props;

    return (

      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shop" component={ ShopPage } />
          <Route exact path="/checkout" component={ CheckoutPage } />
          <Route
            exact
            path="/signin"
            render={
              () => currentUser ? <Redirect to="/" /> : <Auth />
            }
          />
        </Switch>
      </div>
    );

  };

};

// we are destructing user from state via ({user})
const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(App);
