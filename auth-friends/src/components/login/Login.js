import React from 'react';
import {connect} from "react-redux";
import {authPerson} from "../../store/auth/authActions";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        border: '1px solid #ffffff',
        boxShadow: '0 3px 5px 2px rgba(167, 158, 183, 0.3)',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px 0 15px 0'
    },
    field: {
        width: '80%',
    }
};

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (event) => {
        event.preventDefault();
        this.props.authPerson(this.state,  this.props.history);
    };

    render() {
        return (
            <div className={this.props.classes.root} >
                <form onSubmit={this.login} className={this.props.classes.form}>
                    <Typography>Login</Typography>
                    <TextField
                        className={this.props.classes.field}
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        className={this.props.classes.field}
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="secondary">Log in</Button>
                </form>
            </div>
        );
    }
}

export default connect(null, {authPerson})(withStyles(styles)(Login));
