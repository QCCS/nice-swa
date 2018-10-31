/**
 * Created by zhouli on 18/9/20
 */
//reducer
const initialState = {
    text: 'Hello',
    isHideFooter: false,//是否隐藏footer
    getPost: '',
};
const reducer = (state = initialState, action) => {
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
        return initialState;
    }
};
export default reducer;
