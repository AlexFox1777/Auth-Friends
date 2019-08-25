import React from 'react';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Clear from '@material-ui/icons/Clear';
import Create from '@material-ui/icons/Create';
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';
import {connect} from "react-redux";
import {getFriends} from "../../store/friends/friendsActions";
import Grid from "@material-ui/core/Grid";

const Actions = styled.div`
    padding: 0 3px 0 3px
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 2px solid #f7f7f7;
`;

class PersonProfile extends React.Component {
    state = {
        friend: {}
    };

    componentDidMount() {
        this.getData();
        this.getPerson();
    }

    getData = () => {
        // console.log('getData');
        this.props.getFriends();
    };

    getPerson = () => {
        let friend = this.props.friends.find(
            friend => friend.id === this.props.match.params.friendId);
        this.setState({...this.state, friend: friend});
    };


    render() {
        console.log('Listfriends', this.props.friends);
        console.log('param', this.props.match.params.friendId);
        console.log('friend', this.state.friend);
        return (
            <Grid container justify={"center"}>
                <Grid item xs={10} sm={5}>
                    <Card>
                        <Actions>
                            <IconButton>
                                <Create/>
                            </IconButton>
                            <IconButton>
                                <Clear/>
                            </IconButton>
                        </Actions>
                        <CardContent>
                            <p>Name: </p>
                            <p>Age: </p>
                            <p>Email: </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

const mapPropsToState = state => {
    return {
        friends: state.friends,
    }
};
export default connect(mapPropsToState, {getFriends})(PersonProfile);