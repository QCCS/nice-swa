/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import Header from './js/react-components/header';
import Footer from './js/react-components/footer';
import Routes from "./routes";
import {withStyles} from '@material-ui/core/styles';
import HeaderContent from './js/react-components/header-content/header-content';
import {connect} from 'react-redux';
import SingleLineGridList from './js/pages/components-test/single-line-grid-list';

const styles = theme => ({
    root: {
        width: '100%',
        height: 50
    },
});

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }
    render = () => {
        return ( <div>
            <Header>
                <HeaderContent/>
            </Header>
            <Routes/>
            {!this.props.isHideFooter &&<Footer>
                <SingleLineGridList/>
            </Footer>}
        </div> )
    }
}
function mapStateToProps(state) {
    return {isHideFooter: state.isHideFooter}
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
const AppWrap = connect(mapStateToProps, mapDispatchToProps,
    undefined,{pure:false})(App);

export default withStyles(styles)(AppWrap);
