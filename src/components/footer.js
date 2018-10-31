/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../styles/components/footer.scss';
class Footer extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    render = () => {
        return (<div className="footer-wrap">
            {this.props.children}
            <div className='bei-an'>渝ICP备16001049号</div>
            <div className='footer-des-wrap'>
                <div className='share'>前端技术分享 © 2018</div>
                <div className='slogan'>Proud to use nice-swa</div>
            </div>

        </div> )
    }
}
export default Footer;
