import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
import routeConf from '../../routes/router-conf';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 2,
    },
});

class SideNavList extends React.Component {
    state = {
        tagNav: false,
        userNav: false,
        commentNav: false,
        postNav: false
    };
    handleClickTagList = () => {
        this.setState(state => ({tagNav: !state.tagNav}));
    };
    handleClickUserList = () => {
        this.setState(state => ({userNav: !state.userNav}));
    };
    handleClickCommentList = () => {
        this.setState(state => ({commentNav: !state.commentNav}));
    };
    handleClickPostList = () => {
        this.setState(state => ({postNav: !state.postNav}));
    };
    //渲染菜单
    renderNavList = (route,that) => {
        const {match,classes} = this.props;
        return (<List component="nav">
            {_getListItem(route)}
        </List>);
        function _getListItem(route) {
            let navArr = [];
            for (let key in route) {
                if (!route[key].children) {
                    navArr.push(_getItemByKey(route[key]));
                } else {
                    navArr.push(_getItemNoLink(route[key],route[key].openStateFun,route[key].openState));
                    navArr.push(_getItemChildren(route[key].children,route[key].openState));
                }
            }
            return navArr;
        }
        function _getItemByKey(nav) {
            let link = props => <Link to={`${match.url}/${nav['link']}`} {...props} />;
            return (<ListItem button component={link}>
                <ListItemIcon>
                    {nav['icon']}
                </ListItemIcon>
                <ListItemText inset primary={nav['name']}/>
            </ListItem>);
        }
        function _getItemNoLink(nav,openStateFun,openState) {
            return (
                <ListItem button onClick={that[openStateFun]}>
                    <ListItemIcon>
                        {nav['icon']}
                    </ListItemIcon>
                    <ListItemText inset primary={nav['name']}/>
                    {that.state[openState] ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
            );
        }
        function _getItemChildren(route,openState) {
            return (
                <Collapse in={that.state[openState]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.nested} >
                        {_getListItem(route)}
                    </List>
                </Collapse>
            );
        }
    }

    render() {
        const {classes} = this.props;
        const HomeLink = props => <Link exact to={'/'} {...props} />;
        const AboutLink = props => <Link exact to={'/about'} {...props} />;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button component={HomeLink}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="首页"/>
                    </ListItem>
                </List>
                <hr/>
                {this.renderNavList(routeConf.list,this)}
                <hr/>
                <List component="nav">
                    <ListItem button component={AboutLink}>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="关于博客"/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

SideNavList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavList);
