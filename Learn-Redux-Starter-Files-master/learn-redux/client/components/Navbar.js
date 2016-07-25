/**
 * Created by Ivan_Chervenkov on 7/14/2016.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';

const handleLeftIconTouch = () => {
    alert('Left button is touched');
};

const Navbar = () => (
    <AppBar
        title="Reduxstagram"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap = { handleLeftIconTouch }
    />
);

export default Navbar;