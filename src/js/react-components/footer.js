/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../../css/react-components/footer.css';
class Footer extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    render = () => {
        return (<div className="footer-wrap">
            {this.props.children}
        </div> )
    }
}
export default Footer;