import React from 'react';
import {connect} from "react-redux";
import {getFriends} from "../../store/friends/friendsActions";
import Friend from "./Friend";
import Grid from "@material-ui/core/Grid";
import AddNewFriend from "./AddNewFriend";


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
                {this.props.friends.length > 1 && (
                    <Grid container justify={'center'} spacing={3}>
                        {this.props.friends.map(friend => (
                                <Grid item xs={12} sm={4} md={3}>  <Friend friend={friend} /></Grid>
                            )
                        )}
                        <Grid item xs={12} sm={4} md={3}><AddNewFriend /></Grid>
                    </Grid>
                )}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends.friends
    }
};

export default connect(mapStateToProps, {getFriends})(Friends);