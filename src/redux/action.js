/**
 * Created by zhouli on 18/9/20
 */
//布局控制
const HideSideNav = {
    type: 'HideSideNav'
};
const ShowSideNav= {
    type: 'ShowSideNav'
};

const PrintHelloAction = {
    type: 'PRINT_HELLO'
};
const HideFooterAction = {
    type: 'HIDE_FOOTER'
};
const ShowFooterAction = {
    type: 'SHOW_FOOTER'
};

const GetPostListIng = {
    type: 'GetPostListIng'
};
const GetPostListOk = {
    type: 'GetPostListOk'
};
const GetPostListErr = {
    type: 'GetPostListErr'
};

//获取博客列表
const GetPostsIng = {
    type: 'GetPostsIng'
};
const GetPostsOk = {
    type: 'GetPostsOk'
};
const GetPostsErr = {
    type: 'GetPostsErr'
};
//获取博客
const GetPostIng = {
    type: 'GetPostIng'
};
const GetPostOk = {
    type: 'GetPostOk'
};
const GetPostErr = {
    type: 'GetPostErr'
};

let actions = {
    HideSideNav,
    ShowSideNav,

    GetPostListIng,
    GetPostListOk,
    GetPostListErr,
    PrintHelloAction,
    HideFooterAction,
    ShowFooterAction,

    GetPostsIng,
    GetPostsOk,
    GetPostsErr,

    GetPostIng,
    GetPostOk,
    GetPostErr
};
export default actions;
