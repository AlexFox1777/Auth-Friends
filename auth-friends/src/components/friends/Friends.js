import React from 'react';
import {connect} from "react-redux";
import {getFriends} from "../../actions/personActions";
import Friend from "./Friend";
import Grid from "@material-ui/core/Grid";


class Friends extends React.Component {
    state = {};

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.props.getFriends();
    };

    render() {
        return (
            <>
                <p>Friends</p>
                <Grid container justify={'center'} spacing={3}>
                    {this.props.friends.map(friend => (
                        <Grid item xs={12} sm={4} md={3}>  <Friend friend={friend} /></Grid>
                        )
                    )}
                </Grid>
            </>
        )
    }
}

const mapPropsToState = state => {
    return {
        friends: state.friends
    }
};

export default connect(mapPropsToState, {getFriends})(Friends);