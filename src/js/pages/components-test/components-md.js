/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import '../../../css/pages/components-test/components-md.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import CustomPaginationActionsTable from './table-pagination-actions';
import ScrollableTabsButtonForce from './scrollable-tabs-button-force';
import ListItemComposition from './side-nav';
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
class ComponentsMd extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 'recents',
        };

    }
    componentDidMount(){
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render = () => {
        const { value } = this.state;
        return (<div className="components-md-wrap">
            <Button variant="raised" color="primary">
                Hello World
            </Button>
            <br/>
            svg图标
            <div>
                <AccessAlarm/>
                <ThreeDRotation/>
            </div>

            <br/>
            字体图标引入
            <div>
                <Icon>add_circle</Icon>
            </div>

            底部导航
            <div className="nav-test">
                <BottomNavigation value={value} onChange={this.handleChange} >
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
                </BottomNavigation>
            </div>
            表格
            <div className="table-test">
                <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </div>
            tab
            <div className="tab-test">
                <ScrollableTabsButtonForce></ScrollableTabsButtonForce>
            </div>
            menus
            <div className="menus-test">
                <ListItemComposition></ListItemComposition>
            </div>
        </div> )
    }
}
export default withStyles(styles)(ComponentsMd);
