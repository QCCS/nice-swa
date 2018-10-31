/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../../styles/pages/list/post/post-new.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createPost} from '../../../service/post-api';

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
            title: 'recents',
            desc: 'Cat in the Hat',
            content: 'Cat in the Hat',
            is_delete: 1,
            is_draft: 1,
        };

    }

    componentDidMount() {
    }

    handleChange = name => event => {
        console.log(name)
        console.log(event.target.value)
        this.setState({
            [name]: event.target.value,
        });
    };

    savePost = () => {
        let params = {
            title: this.state.title,
            desc: this.state.desc,
            content: this.state.content,
            is_delete: 1,
            is_draft: 1,
        }
        createPost(params)
            .then(res => {
                console.log(res)
            })

    }
    render = () => {
        return (<div className="post-list-wrap">
            <h2>创建博客</h2>
            <TextField
                id="outlined-name"
                label="题目"
                value={this.state.title}
                onChange={this.handleChange('title')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-name"
                label="描述"
                value={this.state.desc}
                onChange={this.handleChange('desc')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-name"
                label="内容"
                value={this.state.content}
                onChange={this.handleChange('content')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button
                variant="contained"
                color="primary"
                disableRipple
                onClick={this.savePost}
            >
                保存
            </Button>
        </div>)
    }
}

export default withStyles(styles)(PostList);
