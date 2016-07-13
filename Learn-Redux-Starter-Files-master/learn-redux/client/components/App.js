/**
 * Created by Ivan_Chervenkov on 7/12/2016.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    "use strict";
    return {
        posts: state.posts,
        comments: state.comments
    }
};

function mapDispatchToProps(dispatch) {
    "use strict";
    return bindActionCreators(actionCreators, dispatch);
}

const  App = connect(mapStateToProps, mapDispatchToProps)(Main);

export  default App;