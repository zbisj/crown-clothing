import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  OptionDiv,
  OptionLink,
  LogoContainer,
  HeaderContainer,
  OptionsContainer
} from './header.styles';

import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/selectors/CartSelectors'
import { selectCurrentUser } from '../../redux/selectors/UserSelectors'

const Header = ({currentUser, hidden}) => (

  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>

      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>

      {
        currentUser ? (
          <OptionDiv onClick={ () => auth.signOut() }>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )
      }

      <OptionDiv>
        <CartIcon />
      </OptionDiv>

    </OptionsContainer>

    {
      hidden ? null : <CartDropdown />
    }

  </HeaderContainer>

);

const mapStateToProps = createStructuredSelector(
  {
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
  }
);

export default connect(mapStateToProps)(Header);
