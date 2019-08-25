import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {pink} from "@material-ui/core/colors";
import {ThemeProvider} from "styled-components";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 64,
    },
    title: {
        flexGrow: 1
    }
}));

const LinkButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(pink[500]),
        height: 50,
    },
}))(Button);


const NavBar = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            My Friends
                        </Typography>
                        {!props.isAuth && <LinkButton component={RouterLink} to="/login">Login</LinkButton>}
                        {props.isAuth &&
                        <LinkButton component={RouterLink} onClick={() => props.logout()} to="/login">Logout</LinkButton>}
                        {props.isAuth && <LinkButton component={RouterLink} to="/friends">Friends</LinkButton>}

                </Toolbar>
            </AppBar>
        </div>
    );
};
const mapPropsToState = state => {
    return {
        username: state.user.username,
        isAuth: state.isAuth,
    }
};
export default connect(mapPropsToState, {logout})(NavBar);