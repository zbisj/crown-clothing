import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import WithSpinner from '../../components/spinner/Spinner';
import CollectionPage from '../collections/CollectionPage';
import { updateCollections } from '../../redux/actions/ShopActions'
import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils';
import CollectionsOverview from '../../components/collection/CollectionsOverview';

const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unsubcribeFromSnapshot = null;

  componentDidMount() {

    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {

      // collections object (on Firebase objects are called maps)
      const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);

      // passing the collections object to the redux action to update store
      updateCollections(collectionsMap);
      this.setState(
        {
          loading: false
        }
      )
    });

  };

  render() { 
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route exact
          path={`${match.path}`}
          render={
            (props) => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props} />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionsPageWithSpinner isLoading={ loading } { ...props } />
          }
         />
      </div>
    );

  };

};

const mapDispatchToProps = dispatch => (
  {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  }
)
export default connect(null, mapDispatchToProps)(ShopPage);
