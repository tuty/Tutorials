import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';

const hOneStyle = {
    'font-family': 'billabong',
    'text-align': 'center',
    'font-weight': '100',
    'font-size': '3rem' ,
    margin: '2rem 0',
    'letter-spacing': '-1px',
    'text-shadow': '0px 4p,x 0 rgba(18, 86, 136, 0.11)'
}

const anchorStyle = {
        color: 'blue',
        'text-decoration': 'none'
}

const Main = React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Navbar />
                    <h1>
                        <Link to="/">Reduxstagram</Link>
                    </h1>
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </MuiThemeProvider>
        )
    }
});

export default Main;
/*
 h1
 font-family billabong, 'billabongregular'
 text-align center
 font-weight 100
 font-size 13rem
 margin 2rem 0
 letter-spacing -1px
 text-shadow 0px 4px 0 rgba(18, 86, 136, 0.11)
 a
 color blue
 text-decoration none
 &:focus
 outline 0
 */
