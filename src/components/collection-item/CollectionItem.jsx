import React from 'react';
import { connect } from 'react-redux';


import Button from '../button/Button';
import { addItem } from '../../redux/actions/CartActions';
import {
  Item, AddToCartButton, Footer, NameContainer, PriceContainer
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {

  const { name, price, imageUrl } = item;

  return (

    <Item>

      <div
        className="image"
        style={{backgroundImage: `url(${ imageUrl })`}}
      />

      <Footer>
        <NameContainer>{ name }</NameContainer>
        <PriceContainer>{ price }</PriceContainer>
      </Footer>
      <AddToCartButton
        inverted
        onClick={ () => addItem(item) }
      >
        ADD TO CART
      </AddToCartButton>

    </Item>

  );

};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
