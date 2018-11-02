/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';

import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import actions from '../../redux/action';
import {loginService} from '../../service/api';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: '0 auto',
        width: 400,
        height: 400,
        textAlign: 'center'
    },
    paperInner: {},

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class HeaderContent extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        openDialog: false,
        checkedPhone: false,
        checkedEmail: false,

        mobile: "",
        password: "",
    };

    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    handleLogin = () => {
        this.setState({
            openDialog: true,
            anchorEl: null
        });

    }
    handleClose = () => {
        this.setState({openDialog: false});
    }
    handleCloseLogout = () => {
        this.setState({anchorEl: false});
        // this.props.onButtonHideClick();
        this.loginOutAction()
    }
    handleChangePhone = () => {
        this.setState({
            checkedPhone: true,
            checkedEmail: false
        });
        this.props.onButtonShowClick();
    }
    handleChangeEmail = () => {
        this.setState({
            checkedPhone: false,
            checkedEmail: true
        });
        this.props.onButtonHideClick();
    }

    onPhoneChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({
            mobile: e.target.value,
        });
    }
    onPasswordChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({
            password: e.target.value,
        });
    }

    //登陆
    loginAction = () => {
        let params = {
            mobile: this.state.mobile,
            password: this.state.password
        }
        loginService(params)
            .then(res => {
                console.log(res)
                window.localStorage.setItem("authorization", res.data.token.access_token);
            })
    }
    //退出
    loginOutAction = () => {
        window.localStorage.setItem("authorization", null);
    }
    toggleSideNav = () => {
        this.props.isHideSideNav ? this.props.onButtonShowSideNav() : this.props.onButtonHideSideNav()
    }

    render() {
        const {anchorEl, mobileMoreAnchorEl, checkedPhone, checkedEmail} = this.state;
        const {classes} = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleCloseLogout}>退出</MenuItem>
                <MenuItem onClick={this.handleLogin}>登录</MenuItem>
                {/*<MenuItem onClick={this.handleClose}>Profile</MenuItem>*/}
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={4} color="secondary">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={11} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <Dialog
                    fullScreen
                    open={this.state.openDialog}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Login
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                Confirm
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button onClick={this.handleChangePhone}>
                            <ListItemText primary="Phone Login" secondary="zhouli"/>
                            {checkedPhone + ""}
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={this.handleChangeEmail}>
                            <ListItemText primary="Email login" secondary="json119.com"/>
                            {checkedEmail + ""}
                        </ListItem>
                    </List>


                    <Slide direction="up" in={checkedPhone} mountOnEnter unmountOnExit>
                        <Paper elevation={2} className={classes.paper}>
                            <div className={classes.paperInner}>Phone</div>

                            <div>
                                <h1>mobile</h1>
                                <input onChange={(e) => {
                                    this.onPhoneChange(e)
                                }}/>
                            </div>
                            <div>
                                <h1>password</h1>
                                <input onChange={(e) => {
                                    this.onPasswordChange(e)
                                }}/>
                            </div>

                            <div onClick={this.loginAction}>登陆</div>
                        </Paper>
                    </Slide>
                    <Slide direction="up" in={checkedEmail} mountOnEnter unmountOnExit>
                        <Paper elevation={4} className={classes.paper}>
                            <div className={classes.paperInner}>Email</div>
                        </Paper>
                    </Slide>
                </Dialog>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            <IconButton className={classes.menuButton}
                                        onClick={this.toggleSideNav}
                                        color="inherit" aria-label="Open drawer">
                                <MenuIcon/>
                            </IconButton>
                            Node Blog Manage System
                        </Typography>

                        <div className={classes.grow}/>
                        {/*className={classes.sectionDesktop}*/}
                        <div>
                            {/*<IconButton color="inherit">*/}
                            {/*<Badge className={classes.margin} badgeContent={4} color="secondary">*/}
                            {/*<MailIcon/>*/}
                            {/*</Badge>*/}
                            {/*</IconButton>*/}
                            {/*<IconButton color="inherit">*/}
                            {/*<Badge className={classes.margin} badgeContent={17} color="secondary">*/}
                            {/*<NotificationsIcon/>*/}
                            {/*</Badge>*/}
                            {/*</IconButton>*/}
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                        {/*<div className={classes.sectionMobile}>*/}
                        {/*<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">*/}
                        {/*<MoreIcon/>*/}
                        {/*</IconButton>*/}
                        {/*</div>*/}
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

HeaderContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        isHideFooter: state.isHideFooter,
        isHideSideNav: state.reducerSideNav.isHideSideNav,//
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onButtonHideClick: () => dispatch(actions.HideFooterAction),
        onButtonShowClick: () => dispatch(actions.ShowFooterAction),
        onButtonHideSideNav: () => dispatch(actions.HideSideNav),
        onButtonShowSideNav: () => dispatch(actions.ShowSideNav),
    }
}

const HeaderContentWrap = connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
export default withStyles(styles)(HeaderContentWrap);
