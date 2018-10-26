import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import HistoryIcon from '@material-ui/icons/History';

import OneIcon from '@material-ui/icons/OndemandVideo';
import TwoIcon from '@material-ui/icons/Tab';
import ThreeIcon from '@material-ui/icons/Theaters';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class SideNavList extends React.Component {
    state = {
        open: true,
        open2: true,
        openList: false
    };

    handleClick = () => {
        this.setState(state => ({open: !state.open}));
    };
    handleClick2 = () => {
        this.setState(state => ({open2: !state.open2}));
    };
    handleClickList = () => {
        this.setState(state => ({openList: !state.openList}));
    };

    render() {
        const {classes, match} = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">

                    <Link exact to={`/`}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary="Home"/>
                        </ListItem>
                    </Link>


                    <Link exact to={`/about`}>
                        <ListItem button>
                            <ListItemIcon>
                                <HistoryIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary="About"/>
                        </ListItem>
                    </Link>


                    <ListItem button onClick={this.handleClickList}>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="List"/>
                        {this.state.openList ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>


                    <Collapse in={this.state.openList} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <Link exact to={`/list`}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <SendIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="list"/>
                            </ListItem>
                        </Link>
                        <Link to={`${match.url}/one`}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <OneIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="one"/>
                            </ListItem>
                        </Link>
                        <Link to={`${match.url}/two`}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <TwoIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="two"/>
                            </ListItem>
                        </Link>
                        <Link to={`${match.url}/three`}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <ThreeIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="three"/>
                            </ListItem>
                        </Link>
                        </List>
                    </Collapse>

                    <Link to={`${match.url}/components-md`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary="Components"/>
                        </ListItem>
                    </Link>


                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Empty"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Empty"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Empty"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Drafts"/>
                    </ListItem>

                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="DataCenter"/>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>

                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="BankData"/>
                            </ListItem>
                        </List>
                    </Collapse>


                    <ListItem button onClick={this.handleClick2}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Company"/>
                        {this.state.open2 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="Department"/>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="PersonList"/>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="Entity"/>
                            </ListItem>
                        </List>
                    </Collapse>

                </List>
            </div>
        );
    }
}

SideNavList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavList);