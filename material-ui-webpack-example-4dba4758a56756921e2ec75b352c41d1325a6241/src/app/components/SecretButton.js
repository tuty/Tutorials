/**
 * Created by Ivan_Chervenkov on 7/14/2016.
 */
import React from'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const SecretButton = () => (
        <RaisedButton label="Secondary" secondary={true} style={style}
            label="Super Secret Password"
            secondary={true}
        />
);

export default SecretButton;