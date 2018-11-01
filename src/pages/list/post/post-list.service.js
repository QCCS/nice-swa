/**
 * Created by zhouli on 18/11/1
 */
import actions from '../../../redux/action';
import {getPosts, getPost} from '../../../service/post-api';

export default function PostListActions(dispatch) {
    return {
        getPostList: () => {
            console.log('获取列表');
            dispatch(actions.GetPostsIng);
            getPosts()
                .then(res => {
                    actions.GetPostsOk.payload = res.data;
                    dispatch(actions.GetPostsOk);
                })
                .catch((res) => {
                    actions.GetPostsErr.payload = res;
                    dispatch(actions.GetPostsErr);
                });
        },
        getPostById: (id) => {
            console.log('获取详情');
            dispatch(actions.GetPostIng);
            getPost(id)
                .then(res => {
                    actions.GetPostOk.payload = res.data.post;
                    dispatch(actions.GetPostOk);
                })
                .catch((res) => {
                    actions.GetPostErr.payload = res;
                    dispatch(actions.GetPostErr);
                });
        }
    }
}
