/**
 * Created by zhouli on 18/9/19
 * 保持组件的清洁
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/pages/list/post/post-list.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PostListActions from './post-list.service';

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.getPostList();
    }

    render = () => {
        let posts = this.props.posts;
        let post = this.props.post;
        return (<div className="post-list-wrap">
            <div className='request-btn' onClick={this.props.getPostList}>刷新博客列表</div>
            <h1 className="post-list-title">博客列表</h1>
            <div className="post-list-left">
                <List component="nav">
                    {posts.map && posts.map((item) => {
                        return <ListItem key={item.id} button
                                         onClick={() => {
                                             this.props.getPostById(item.id)
                                         }}>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    })}
                </List>
            </div>
            <div className="post-list-right">
                <h1>{post.title}</h1>
                <h1>{post.desc}</h1>
                <h1>{post.content}</h1>
            </div>
            <div className="clear"></div>
        </div>)
    }
}
//for eslint
PostList.propTypes = {
    getPostList: PropTypes.any,
    getPostById: PropTypes.any,
    posts: PropTypes.any,
    post: PropTypes.any,
};
function mapStateToProps(state) {
    return {
        posts: state.reducerPost.posts,// 博客列表
        post: state.reducerPost.post,// 博客详情
    };
}
function mapDispatchToProps(dispatch) {
    return PostListActions(dispatch);
}
const PostListWrap = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default PostListWrap;


