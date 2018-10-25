/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createFee,deleteFee,updateFee,getFee,getFees} from '../../service/api';
import '../../css/pages/list/two.css';

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
class ListOne extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 'recents',
            updateId:0,
            deleteId:0,
            getId:0,
        };

    }
    componentDidMount(){
    }


    _createFee=()=>{
        let obj = {
            "des":"第"+Math.random()*10000+"个费用",
            "title":"test fee1",
            "total":"12"+Math.random()*100,
        }
        createFee(obj)
            .then(res=>{
                console.log(res)
            });
    }

    _updateFee=()=>{
        let obj = {
            "des":"第"+Math.random()*10000+"个费用",
            "title":"test fee1",
            "id":this.state.updateId,
            "total":"12"+Math.random()*100,
        }
        updateFee(obj)
            .then(res=>{
                console.log(res)
            });
    }

    updateIdChange=(e)=>{
        this.setState({
            updateId:e.target.value
        })
    }
    _getFee=()=>{
        getFee(this.state.getId)
        .then(res=>{
            console.log(res)
        });
    }

    getIdChange=(e)=>{
        this.setState({
            getId:e.target.value
        })
    }

    _getFees=()=>{
        getFees()
            .then(res=>{
                console.log(res)
            });
    }

    _deleteFee=()=>{
        deleteFee(this.state.deleteId)
            .then(res=>{
                console.log(res)
            });
    }
    deleteIdChange=(e)=>{
        this.setState({
            deleteId:e.target.value
        })
    }

    render = () => {
        return (<div className="components-md-wrap">
            <div onClick={this._createFee}>post axios _createFee</div>
            <div onClick={this._updateFee}>update axios _updateFee 输入要更新的id<input onChange={(e)=>{this.updateIdChange(e)}}/></div>
            <div onClick={this._getFee}>get axios _getFee 输入要查询的id<input onChange={(e)=>{this.getIdChange(e)}}/> </div>
            <div onClick={this._getFees}>get axios _getFees</div>
            <div onClick={this._deleteFee}>delete axios _deleteFee 输入要删除的id<input onChange={(e)=>{this.deleteIdChange(e)}}/></div>
        </div> )
    }
}
export default withStyles(styles)(ListOne);
