import { compose } from 'redux';
import { connect } from 'react-redux';

import WithSpinner from '../spinner/Spinner'
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/selectors/ShopSelectors';
import CollectionPage from '../../pages/collections/CollectionPage';


const mapStateToProps = createStructuredSelector(
  {
    isLoading: (state) => !selectIsCollectionLoaded(state)
  }
);

export const CollectionsPageContainer = compose(
  WithSpinner,
  connect(mapStateToProps)
)(CollectionPage)
