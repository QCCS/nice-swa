/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../../styles/pages/list/post/post-list.scss';
import {getPosts,getPost} from '../../../service/post-api';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            post:{}
        };

    }

    componentDidMount() {
        this.getPostList();
    }
    getPostList = () => {
        getPosts()
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts:res.data
                })
            })

    }
    getPostById=(id)=>{
        getPost(id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    post:res.data.post
                })
            })
    }

    render = () => {
        let posts = this.state.posts;
        let post = this.state.post;
        return (<div className="post-list-wrap">
            <h1 className="post-list-title">博客列表</h1>
            <div className="post-list-left">
                <List component="nav">
                    {posts.map(item=>{
                        return <ListItem button onClick={()=>{this.getPostById(item.id)}}>
                            <ListItemText primary={item.title} />
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

export default withStyles(styles)(PostList);
