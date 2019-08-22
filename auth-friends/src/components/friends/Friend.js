import React from 'react';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Clear from '@material-ui/icons/Clear';
import Person from '@material-ui/icons/Person';
import Create from '@material-ui/icons/Create';
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components';

const Actions = styled.div`
    padding: 0 3px 0 3px
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 2px solid #f7f7f7;
`;

class Friend extends React.Component {
    state = {};

    goToFriend() {
        console.log('props in friends', this.props);
        this.props.history.push(`/friends/${this.props.friend.id}`);
    }

    render() {

        return (
            <Card>
                <Actions>
                    <a href='#' onClick={() => this.goToFriend() }>
                        <IconButton>
                            <Person/>
                        </IconButton>
                    </a>
                    <IconButton>
                        <Create/>
                    </IconButton>
                    <IconButton>
                        <Clear/>
                    </IconButton>
                </Actions>
                <CardContent>
                    <p>Name: {this.props.friend.name}</p>
                    <p>Age: {this.props.friend.age}</p>
                    <p>Email: {this.props.friend.email}</p>
                </CardContent>
            </Card>
        )
    }
}

export default Friend;