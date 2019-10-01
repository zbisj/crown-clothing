import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({currentUser, hidden}) => (

  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">

      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>

      {
        currentUser ? (
          <div
            className="option"
            onClick={ () => auth.signOut() }
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )
      }

      <div className="option">
        <CartIcon />
      </div>

    </div>

    {
      hidden ? null : <CartDropdown />
    }

  </div>

);

const mapStateToProps = state => (
  {
    hidden: state.cart.hidden,
    currentUser: state.user.currentUser
  }
);

export default connect(mapStateToProps)(Header);
