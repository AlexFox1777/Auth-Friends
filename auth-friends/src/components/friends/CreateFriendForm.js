import React from 'react';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {createNewFriend} from "../../store/friends/friendsActions";

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    field: {
        width: '80%',
    },
    btn: {
        marginTop: 15,
        marginBottom: 15,
    },
};


class CreateFriendForm extends React.Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: '',
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (event) => {
        event.preventDefault();
        this.props.hideForm();
        this.props.createNewFriend(this.state.newFriend);
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <form onSubmit={this.login}>
                    <Typography>New Friend</Typography>
                    <TextField
                        className={this.props.classes.field}
                        type="text"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Name"
                    />
                    <TextField
                        className={this.props.classes.field}
                        type="number"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Age"
                    />
                    <TextField
                        className={this.props.classes.field}
                        type="email"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Email"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={this.props.classes.btn}>
                        Create new friend
                    </Button>
                </form>
            </div>
        );
    }
}

export default connect(null, {createNewFriend})(withStyles(styles)(CreateFriendForm));