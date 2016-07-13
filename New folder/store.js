/**
 * Created by Ivan_Chervenkov on 7/8/2016.
 */
import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create data for default object
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;