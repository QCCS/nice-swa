/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../styles/react-components/header.css';
class Header extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    render = () => {
        return (<div className="header-wrap">
            {this.props.children}
        </div> )
    }
}
export default Header;
