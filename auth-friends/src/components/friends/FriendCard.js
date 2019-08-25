import withStyles from "@material-ui/core/styles/withStyles";
import {pink} from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";

export const FriendCard = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(pink[500]),
        height: 'auto',
        textAlign: 'center',
    },
}))(Card);
