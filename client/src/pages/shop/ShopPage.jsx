import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/spinner/Spinner';
import CollectionPage from '../collections/CollectionPage';
import { fetchCollectionsStartAsync } from '../../redux/actions/ShopActions';
import { selectIsCollectionsFetching, selectIsCollectionLoaded } from '../../redux/selectors/ShopSelectors';
import CollectionsOverview from '../../components/collection/CollectionsOverview';

const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unsubcribeFromSnapshot = null;

  componentDidMount() {

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

  };

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route exact
          path={`${match.path}`}
          render={
            (props) => <CollectionsOverviewWithSpinner isLoading={ isCollectionFetching } { ...props} />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionsPageWithSpinner isLoading={ !isCollectionLoaded } { ...props } />
          }
         />
      </div>
    );

  };

};

const mapStateToProps = createStructuredSelector(
  {
   isCollectionLoaded: selectIsCollectionLoaded,
   isCollectionFetching: selectIsCollectionsFetching
  }
)

const mapDispatchToProps = dispatch => (
  {
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
