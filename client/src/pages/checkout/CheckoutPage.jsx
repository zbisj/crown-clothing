import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton'

import CheckoutItem from '../../components/checkout/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/CartSelectors';

import './checkout.styles.scss'

const CheckoutPage = ({total, cartItems}) => (

  <div className="checkout-page">

    <div className="checkout-header">

      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>

    </div>

    {
      cartItems.map(cartItem => (
        <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
      ))
    }

    <div className="total">
      <span>TOTAL: ${ total }</span>
    </div>

    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>

    <StripeCheckoutButton price={ total } />

  </div>

);

const mapStateToProps = createStructuredSelector(
  {
    total: selectCartTotal,
    cartItems: selectCartItems
  }
)
export default connect(mapStateToProps)(CheckoutPage);
