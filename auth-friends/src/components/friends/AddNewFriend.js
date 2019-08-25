import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';
import {connect} from "react-redux";
import {deleteFriend} from "../../store/friends/friendsActions";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {pink} from "@material-ui/core/colors";
import CreateFriendForm from "./CreateFriendForm";
import {FriendCard} from "./FriendCard";

const Actions = styled.div`
    padding: 0 3px 0 3px
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 2px solid #f7f7f7;
`;



class AddNewFriend extends React.Component {
    state = {
        status: true,
    };

    hideForm = () => {
        this.setState({status: true})
    };

    hideBtn = () => {
        this.setState({status: false})
    };

    render() {

        return (
            <FriendCard>
                {this.state.status === true ? (
                    <CardContent>
                        <Button variant='contained' color='secondary' onClick={() => this.hideBtn()}>Add new
                            friend</Button>
                    </CardContent>
                ) : (
                    <CreateFriendForm hideForm={this.hideForm}/>
                )}
            </FriendCard>
        )
    }
}

export default connect(null, {deleteFriend})(AddNewFriend);