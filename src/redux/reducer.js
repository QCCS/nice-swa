/**
 * Created by zhouli on 18/9/20
 */
import { combineReducers } from 'redux';

const initialSideNavState = {
    isHideSideNav: false,//是否缩进侧边导航,默认显示
};
const reducerSideNav = (state = initialSideNavState, action) => {
    console.log(action);
    switch (action.type) {
    case 'ShowSideNav':
        return {
            isHideSideNav: false
        };
    case 'HideSideNav':
        return {
            isHideSideNav: true
        };
    default:
        return state;
    }
};

//reducer
const initialState = {
    text: 'Hello',
    isHideFooter: false,//是否隐藏footer
    getPost: '',
};
const reducerTest = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
    case 'PRINT_HELLO':
        return {
            text: state.text === 'Hello' ? 'world' : 'Hello'
        };
    case 'HIDE_FOOTER':
        return {
            isHideFooter: true
        };
    case 'SHOW_FOOTER':
        return {
            isHideFooter: false
        };
    case 'GetPostListIng':
        return {
            getPost: '正在发送...'
        };
    case 'GetPostListOk':
        return {
            getPost: action.payload
        };
    case 'GetPostListErr':
        return {
            getPost: action.payload
        };
    default:
        return state;
    }
};
//获取博客列表，博客详情
const initialPostState = {
    posts: [],
    post: {},
};
const reducerPost = (state = initialPostState, action) => {
    console.log(action);
    switch (action.type) {
    case 'GetPostsIng':
        return {
            ...state,//不然会undefined
            posts: []//自动覆盖
        };
    case 'GetPostsOk':
        return {
            ...state,
            posts: action.payload
        };
    case 'GetPostsErr':
        return {
            ...state,
            posts: action.payload
        };
    case 'GetPostIng':
        return {
            ...state,
            post: {}
        };
    case 'GetPostOk':
        return {
            ...state,
            post: action.payload
        };
    case 'GetPostErr':
        return {
            ...state,
            post: action.payload
        };
    default:
        return state;
    }
};
export default combineReducers({
    reducerSideNav,
    reducerTest,
    reducerPost
});
