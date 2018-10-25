/**
 * Created by zhouli on 18/9/19
 */
/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import '../../css/pages/list/one.css';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import CustomPaginationActionsTable from '../components-test/table-pagination-actions';
import ScrollableTabsButtonForce from '../components-test/scrollable-tabs-button-force';
import ListItemComposition from '../components-test/side-nav';
import ControlledExpansionPanels from '../components-test/controlled-expansion-panels';
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
class ListOne extends React.Component {
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
            <h2>Expansion</h2>
            <div className="expansion-test">
                <ControlledExpansionPanels/>
            </div>
            <h2>底部导航</h2>
            <div className="nav-test">
                <BottomNavigation value={value} onChange={this.handleChange} >
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
                </BottomNavigation>
            </div>
            <h2>表格</h2>
            <div className="table-test">
                <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </div>
            <h2>Tab</h2>
            <div className="tab-test">
                <ScrollableTabsButtonForce></ScrollableTabsButtonForce>
            </div>
            <h2>Menus</h2>
            <div className="menus-test">
                <ListItemComposition></ListItemComposition>
            </div>
        </div> )
    }
}
export default withStyles(styles)(ListOne);
