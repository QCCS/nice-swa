/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import Header from './header';
import '../styles/components/header.css';
class HeaderWrap extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    render = () => {
        return (<div className="header-wrap-wrap">
            <p className="header-wrap-test">header-test</p>
            <Header>Header</Header>
        </div> )
    }
}
export default HeaderWrap;
