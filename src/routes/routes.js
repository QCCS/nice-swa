/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import {Route} from 'react-router-dom';
import LeftRight from '../layout/left-right';
import Tags from '../components/tag';
import LeftMiddleRight from '../layout/left-middle-right';
import SideNavList from '../components/side-nav/side-nav-list';
import MiniDrawer from '../pages/components-test/mini-drawer';
import routeConf from './router-conf';
const Home = () => (
    <div>
        <LeftMiddleRight
            left={<div>left</div>}
            right={<div>right</div>}
            middle={<div><Tags tags={['tags1']}></Tags></div>}
        />
    </div>
);
//列表
const list = ({ match }) => (
    <div>
        <LeftRight left={<div>
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
    </div>
);
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
        for(let key in rList){
            console.log(key)
            if(rList[key].link === listId){
                return rList[key].component;
            }
            if(rList[key].children){
                return _getChildComponentById(rList[key].children,listId);
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
        about
    </div>
);
let routeList = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: list
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
