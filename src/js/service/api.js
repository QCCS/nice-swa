/**
 * Created by zhouli on 18/9/20
 */
import request from '../utils/request';
let baseUrl = 'http://47.100.13.168:9113';
//登陆
export function loginService(obj) {
    return request(baseUrl+'/api/login'+'?mobile='+obj.mobile+'&password='+obj.password, {
        method: 'get',

    });
}

//添加费用
export function createFee(obj) {
    return request({
        url:baseUrl+'/api/fee',
        method: 'POST',
        data: obj
    });
}

//修改费用
export function updateFee(obj) {
    return request({
        url:baseUrl+'/api/fee',
        method: 'PUT',
        data: obj
    });
}

//查询费用
export function getFee(id) {
    return request(baseUrl+'/api/fee/'+id, {
        method: 'GET',
    });
}
//查询费用lieb
export function getFees() {
    return request(baseUrl+'/api/feelist', {
        method: 'GET',
    });
}
//删除费用
export function deleteFee(id) {
    return request({
        url:baseUrl+'/api/fee/'+id,
        method: 'DELETE',
    });
}
