/**
 * Created by Ivan_Chervenkov on 7/14/2016.
 */
import React from 'react';
import Link from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24,
    },
};

const GridListExample = (props) => (
    <div style={styles.root}>
        <GridList
            cellHeight={200}
            cols="3"
            style={styles.gridList}
        >
            <Subheader>December</Subheader>
            {props.posts.map((post, i) => (
                <GridTile
                    key={i}
                    title={<FlatButton primary={true} href={`/view/${post.code}`}>comments&nbsp;{ props.comments[post.code] ? props.comments[post.code].length : 0 }</FlatButton> }
                    subtitle={<span>&hearts; { post.likes }</span>}
                    actionIcon={<IconButton onClick={props.increment.bind(null, i)}><StarBorder color="white" /></IconButton>}
                >
                    <img src={post.display_src}/>

                </GridTile>
            ))}
        </GridList>
    </div>
);


export default class GridListExampleSimple extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridListExample { ...this.props } />
        )
    }
};
