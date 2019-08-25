import React from 'react';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Clear from '@material-ui/icons/Clear';
import Person from '@material-ui/icons/Person';
import Create from '@material-ui/icons/Create';
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';
import {connect} from "react-redux";
import {deleteFriend} from "../../store/friends/friendsActions";
import ChangeFriendForm from "./ChangeFriendForm";
import {FriendCard} from "./FriendCard";

const Actions = styled.div`
    padding: 0 3px 0 3px
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 2px solid #f7f7f7;
`;

class Friend extends React.Component {
    state = {
        status: true,
    };

    hideForm = () => {
        this.setState({status: true});
    };
    hideBtn = () => {
        this.setState({status: false})
    };

    render() {

        return (
            <>
                {this.state.status === true ? (
                    <Card>
                        <Actions>
                            <IconButton>
                                <Person/>
                            </IconButton>
                            <IconButton onClick={() => this.hideBtn()}>
                                <Create/>
                            </IconButton>
                            <IconButton onClick={() => this.props.deleteFriend(this.props.friend.id)}>
                                <Clear/>
                            </IconButton>
                        </Actions>
                        <CardContent>
                            <p>Name: {this.props.friend.name}</p>
                            <p>Age: {this.props.friend.age}</p>
                            <p>Email: {this.props.friend.email}</p>
                        </CardContent>
                    </Card>
                ) : (
                    <FriendCard><ChangeFriendForm id={this.props.friend.id} hideForm={this.hideForm}/></FriendCard>
                )}
            </>
        )
    }
}

export default connect(null, {deleteFriend})(Friend);