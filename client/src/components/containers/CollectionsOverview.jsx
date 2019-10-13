import { compose } from 'redux';
import { connect } from 'react-redux';

import WithSpinner from '../spinner/Spinner'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/selectors/ShopSelectors';
import CollectionsOverview from '../collection/CollectionsOverview';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

export const CollectionsOverviewContainer = compose(
  WithSpinner,
  connect(mapStateToProps)
)(CollectionsOverview)
