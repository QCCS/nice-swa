/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import LeftRight from './js/layout/left-right';
import Tags from './js/react-components/tag';
import LeftMiddleRight from './js/layout/left-middle-right';
import {Route} from "react-router-dom";
import ComponentsMd from './js/pages/components-test/components-md';
import SideNavList from './js/react-components/side-nav/side-nav-list';
import MiniDrawer from './js/pages/components-test/mini-drawer';
import ListOne from './js/pages/list/one';
import ListTwo from './js/pages/list/two';
//渲染路由关系
function routerRender() {
    
}

const Home = () => (
    <div>
        <LeftMiddleRight left={<div>left</div>}
                         right={<div>right</div>}
                         middle={<div><Tags tags={["tags1"]}></Tags></div>}
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
    console.log(match)
    let listId = match.match.params.listId;
    return <div>
        listDetail {match.match.params.listId}
        {listId==="one"&&<ListOne></ListOne>}
        {listId==="two"&&<ListTwo></ListTwo>}
        {listId==="components-md"&&<ComponentsMd></ComponentsMd>}
    </div>
};
const about = () => (
    <div style={{height:200}}>
        about
    </div>
);
let routeList = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/list",
        component: list
    },
    {
        path: "/about",
        component: about
    }
]

const Routes = () => (
    <div>
        {routeList.map((item, index) => {
            if (item.path === "/") {
                //exact严格匹配，不然会把在/list的时候，也会显示/的页面
                return <Route
                    exact
                    key={index}
                    path={item.path}
                    component={item.component}/>
            } else {
                return <Route key={index}
                              path={item.path}
                              component={item.component}/>
            }

        })}
    </div>

);
export default Routes;