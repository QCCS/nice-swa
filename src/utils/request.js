import axios from 'axios';
// Add a request interceptor
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);
    config.headers = {
        'Content-Type': 'application/json',
    };
    if (window.localStorage.getItem('authorization') + '' != 'null') {
        config.headers['authorization'] = 'Bearer ' + window.localStorage.getItem('authorization');
    }


    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// 响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response);
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

//请求错误统一处理
function delErr(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
}

export default function request(args) {
    return axios(args)
        .catch(function (error) {
            delErr(error);
        });
}
