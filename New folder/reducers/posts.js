/**
 * Created by Ivan_Chervenkov on 7/8/2016.
 */
const posts = (state = [], action) => {
    "use strict";
    console.log('The post will change');
    console.log(state, action);
    return state;
};

export  default posts;