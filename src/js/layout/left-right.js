/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../../css/layout/left-right.css';
class LeftRight extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
    }

    render = () => {
        return ( <div className="left-right-wrap">
            <div className="left">{this.props.left}</div>
            <div className="right">{this.props.right}</div>
            <div className="clear"></div>
        </div> )
    }
}
export default LeftRight;