

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const ShopReducer  = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
    console.log('fetching started');
      return {
        ...state,
        isFetching: true
      }
    case "FETCH_COLLECTIONS_SUCCESS":
    console.log('fetching successful');

      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case "FETCH_COLLECTIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  };
};

export default ShopReducer
