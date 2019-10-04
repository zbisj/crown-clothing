import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview';
import { OverviewContainer } from './collections-overview.styles'

import { selectCollectionsForPreview } from '../../redux/selectors/ShopSelectors'

const CollectionsOverview = ({ collections }) => (

  <OverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={ id }
          { ...otherCollectionProps }
        />
      ))
    }
  </OverviewContainer>

);

const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollectionsForPreview
  }
);

export default connect(mapStateToProps)(CollectionsOverview);
