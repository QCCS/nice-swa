/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../../styles/pages/list/two.css';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: "#ff0000",
        },
    },
});

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'recents',
        };

    }

    componentDidMount() {
    }

    render = () => {
        return (<div className="user-list-wrap">
            用户列表
        </div>)
    }
}

export default withStyles(styles)(UserList);
