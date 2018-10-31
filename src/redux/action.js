/**
 * Created by zhouli on 18/9/20
 */
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

let actions = {
    GetPostListIng,
    GetPostListOk,
    GetPostListErr,
    PrintHelloAction,
    HideFooterAction,
    ShowFooterAction
};
export default actions;
