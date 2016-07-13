/**
 * Created by Ivan_Chervenkov on 7/12/2016.
 */
import React from 'React';
import { Link } from 'react-router';

const Photo = React.createClass({
    render() {
        "use strict";
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${this.props.post.code}`}>
                        {this.props.post.caption}
                    </Link>
                </div>
            </figure>
        )
    }
});

export default Photo;