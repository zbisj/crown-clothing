 
import DIRECTORY_DATA from '../../data/directory-data';

const INITIAL_STATE = {
  sections: DIRECTORY_DATA
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case '':
      return {
        ...state,
      }
    default:
      return state;
  };

};

export default DirectoryReducer;
