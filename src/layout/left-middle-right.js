/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ControlledExpansionPanels from '../components/components-test/controlled-expansion-panels';
import SideNav from '../components/components-test/side-nav';
import appContext from '../context-data/app-context';
import appContextTwo from '../context-data/app-context-two';
import actions from '../redux/action';
import '../styles/layout/left-middle-right.css';
import '../styles/index.scss';

class LeftMiddleRight extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello',
            body: 'json119'
        };
    }

    componentDidMount() {
    }

    test = () => {
        console.log(this.context);
    };

    getChildContext() {
        return {
            lmrContextData: {
                data: 'lmr-data'
            }
        };
    }

    postJson119 = () => {
        let url = '/api';
        fetch(url, {
            method: 'post',
            headers: {},
            body: JSON.stringify({
                'name': 'zhouli',
                'password': '123'
            })
        })
            .then((response) => {
                if (response.status == 200) {
                    this.setState({
                        body: response.body
                    });
                }
            })
            .catch(function (err) {
                console.log('Fetch错误:' + err);
            });
    };
    getJson119 = () => {
        let url = '/api';
        fetch(url, {
            method: 'get',
            headers: {},
        })
            .then(response => response.body)
            .then(data => {
                this.setState({
                    body: data.toString()
                });
            })
            .catch(function (err) {
                console.log('Fetch错误:' + err);
            });
    };
    render = () => {
        return ( <div className='left-middle-right-wrap'>

            <div className='left'>
                <h1>{this.props.left}</h1>
                <div onClick={this.test}>test</div>
            </div>
            <div className='right'>
                <h1>{this.props.right}</h1>
                <h1>{this.props.text}</h1>
                <h1 className="request-res">{this.props.getPost}</h1>
                <div onClick={this.props.onButtonClick}>print hello</div>
                <div className='request-btn' onClick={this.props.onAjaxButtonClick}>发送请求</div>
                <div onClick={this.getJson119}>fetch get</div>
                <div onClick={this.postJson119}>fetch post</div>
            </div>


            <div className='center'>
                <div className='body'>
                    body
                    <div className='test'>
                        test
                        <div className='test-inner'>test-inner</div>
                    </div>
                </div>
                {this.props.middle}
                {/*考虑把createContext1做成函数*/}
                <appContext.Provider value={{createContext1: 'createContext3', createContext2: 'createContext2'}}>
                    <ControlledExpansionPanels></ControlledExpansionPanels>
                </appContext.Provider>

                <br/>
                <br/>
                <appContextTwo.Provider
                    value={{createContextTwo1: 'createContext3', createContextTwo2: 'createContext2'}}>
                    <SideNav></SideNav>
                </appContextTwo.Provider>

                <div>
                    <h1>fetch请求测试</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.body}}></div>
                </div>

            </div>
            <div className='clear'></div>
        </div> );
    }
}

//for eslint
LeftMiddleRight.propTypes = {
    left: PropTypes.any,
    right: PropTypes.any,
    middle: PropTypes.any,
    text: PropTypes.any,
    onButtonClick: PropTypes.any,
    onAjaxButtonClick: PropTypes.any,
    getPost: PropTypes.any,
};
LeftMiddleRight.contextTypes = {
    router: PropTypes.object,
    myContextData: PropTypes.object
};
//必须 定义 getChildContext 方法，返回需要提供的数据
LeftMiddleRight.childContextTypes = {
    lmrContextData: PropTypes.object
};

//映射Redux state到组件的属性
//参数state为reducer中的state，触发器可能会改变他
//这里映射到本组件的props上来，触发器改变之后立即生效
//使用 this.props.text
function mapStateToProps(state) {
    return {
        text: state.text,
        getPost: state.getPost,// 异步action
    };
}

//映射Redux actions到组件的属性
//包动作映射到本组件的props上
//使用 this.props.onButtonClick
function mapDispatchToProps(dispatch) {
    return {
        onAjaxButtonClick: () => {
            console.log('发请求');
            dispatch(actions.GetPostListIng);
            setTimeout(() => {
                let res = parseInt(Math.random() * 100);
                console.log(res);
                if (res % 2 === 0) {
                    actions.GetPostListOk.payload = '请求结果';
                    dispatch(actions.GetPostListOk);
                } else {
                    actions.GetPostListErr.payload = '请求结果';
                    dispatch(actions.GetPostListErr);
                }
            }, 2000);
        },
        onButtonClick: () => {
            //中间件，在action前，指定操作
            console.log('发请求');
            setTimeout(() => {
                dispatch(actions.PrintHelloAction);
            }, 2000);
        },
    };
}

const LeftMiddleRightWrap = connect(mapStateToProps, mapDispatchToProps)(LeftMiddleRight);

export default LeftMiddleRightWrap;
