/**
 * Created by zhouli on 18/9/20
 */
import request from '../utils/request';
import conf from '../config';

let baseUrl = conf.baseUrl;

export function createPost(obj) {
    return request({
        url: baseUrl + '/admin/post',
        method: 'POST',
        data: obj
    });
}

export function updatePost(obj) {
    return request({
        url: baseUrl + '/admin/post',
        method: 'PUT',
        data: obj
    });
}

export function getPost(id) {
    return request(baseUrl + '/admin/post/' + id, {
        method: 'GET',
    });
}

export function getPosts() {
    return request(baseUrl + '/admin/post', {
        method: 'GET',
    });
}

export function deletePost(id) {
    return request({
        url: baseUrl + '/admin/post/' + id,
        method: 'DELETE',
    });
}
