/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import LeftRight from '../layout/left-right';
import Tags from '../components/tag';
import LeftMiddleRight from '../layout/left-middle-right';
import SideNavList from '../components/side-nav/side-nav-list';
import MiniDrawer from '../components/components-test/mini-drawer';
import routeConf from './router-conf';
const Home = () => (
    <LeftMiddleRight
        left={<div>left</div>}
        right={<div>right</div>}
        middle={<div><Tags tags={['tags1']}></Tags></div>}
    />
);
//列表
const listPage = ({ match }) => (
    <LeftRight
        left={<div>
            <SideNavList match={match}></SideNavList>
        </div>}
        right={<div>
            <Route path={`${match.url}/:listId`} component={listDetail} />
            <Route
                exact
                path={match.url}
                render={() => <MiniDrawer/>}
            />
        </div>}
    />
);
//for eslint
listPage.propTypes = {
    match: PropTypes.object.isRequired
};
//列表详情
const listDetail = (match) => {
    let listId = match.match.params.listId;
    let rList = routeConf.list;

    return (
        <div>
            {_getComponentById(rList,listId)}
        </div>
    );
    function _getComponentById(rList,listId) {
        let c = null;
        for(let key in rList){
            if(rList[key].link === listId){
                c = rList[key].component;
                if(c){
                    return c;
                }
            }
        }
        for(let key in rList){
            if(rList[key].children){
                c = _getChildComponentById(rList[key].children,listId);
                if(c){
                    return c;
                }
            }
        }
    }
    function _getChildComponentById(rList,listId) {
        for(let key in rList){
            if(rList[key].link === listId){
                return rList[key].component;
            }
        }
    }
};
const about = () => (
    <div style={{height:200}}>
        about page
    </div>
);
let routeList = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: listPage
    },
    {
        path: '/about',
        component: about
    }
];

const Routes = () => (
    <div>
        {routeList.map((item, index) => {
            if (item.path === '/') {
                //exact严格匹配，不然会把在/list的时候，也会显示/的页面
                return (
                    <Route
                        exact
                        key={index}
                        path={item.path}
                        component={item.component}/>
                );
            } else {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        component={item.component}/>
                );
            }
        })}
    </div>
);
export default Routes;
