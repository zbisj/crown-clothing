

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = (collectionsMap) => (
  {
    type: 'FETCH_COLLECTIONS_START',
  }
);

export const fetchCollectionsFailure = (collectionsMap) => (
  {
    type: 'FETCH_COLLECTIONS_FAILURE',
    payload: collectionsMap
  }
);

export const fetchCollectionsSuccess = (errorMessage) => (
  {
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: errorMessage
  }
);


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
