/**
 * Created by Ivan_Chervenkov on 7/14/2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};



const LikeButton = React.createClass ({

    render() {
        return (
            <RaisedButton label="&hearts; " primary={true} style={style}/>
        )
    }
});

export default LikeButton;