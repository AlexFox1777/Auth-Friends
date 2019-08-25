import React from 'react';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {changeFriend} from "../../store/friends/friendsActions";

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


class ChangeFriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        }
    };

    componentDidMount() {
        const friend = this.props.friends.find(friend => friend.id === this.props.id);
        this.setState({friend: friend})
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (event) => {
        event.preventDefault();
        this.props.hideForm();
        this.props.changeFriend(this.props.id, this.state.friend);
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
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Name"
                    />
                    <TextField
                        className={this.props.classes.field}
                        type="number"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Age"
                    />
                    <TextField
                        className={this.props.classes.field}
                        type="email"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Email"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={this.props.classes.btn}>
                        Change friend
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        friends: state.friends.friends,
    }
};
export default connect(mapStateToProps, {changeFriend})(withStyles(styles)(ChangeFriendForm));