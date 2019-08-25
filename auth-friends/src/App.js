import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './styles.css';
import Login from "./components/login/Login";
import Friends from "./components/friends/Friends";
import PrivateRoute from "./components/PrivateRoute";
import PersonProfile from './components/Person/PersonProfile'
import NavBar from "./components/navigation/NavBar";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {pink} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 50,
    },
}));


const theme = createMuiTheme({
    typography: {
        fontSize: 13, //default 14
    },
    palette: {
        primary: {
            main: pink[600],
            light: pink[100],
            dark: pink[800],
            contrastText: 'white',
        },
        secondary: {
            main: '#FEA47F',
            light: '#fee0c4',
            dark: '#fe783c',
            contrastText: 'white',
        },
    },
});




function App() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <NavBar/>
                    <Container className={classes.root}>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute exact path="/friends" component={Friends}/>
                        <PrivateRoute path="/friends/:friendId" component={PersonProfile}/>
                    </Container>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
