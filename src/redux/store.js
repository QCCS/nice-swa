/**
 * Created by zhouli on 18/9/20
 */
//导入redux
import { createStore } from 'redux';
import reducer from './reducer';
//store
let store = createStore(reducer);
export default store;
