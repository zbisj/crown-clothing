
import styled, { css } from 'styled-components';

const cellStyles = css`
  width: 23%;
`;

export const   CheckoutItemContainer = styled.div`

  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

`;

export const ImageContainer = styled.div`

  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

`;

export const Cell = styled.div`

  ${ cellStyles }

`

export const QuantityCell = styled.div`

  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }

  ${ cellStyles }

`;


export const RemoveButton = styled.span`

  padding-left: 12px;
  cursor: pointer;

`;
