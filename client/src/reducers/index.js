import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import watsonReducer from './watsonReducer';
import yelpReducer from './yelpReducer';

export default combineReducers({
<<<<<<< HEAD
  watson: watsonReducer,
  yelp: yelpReducer
});
=======
  search: searchReducer,
  watson: watsonReducer
});
>>>>>>> master
