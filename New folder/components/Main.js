/**
 * Created by Ivan_Chervenkov on 7/8/2016.
 */
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        "use strict";
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;