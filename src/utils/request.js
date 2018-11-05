import axios from 'axios';
// Add a request interceptor
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config);
    //authorization 做单元测试的时候，加上
    config.headers = {
        'Content-Type': 'application/json',
        'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiLlkajnq4siLCJlbWFpbCI6IjE1OTIxNTUyOTQxQHFxLmNvbSIsIm1vYmlsZSI6IjE1OTIxNTUyOTkxIiwiaWF0IjoxNTQxMzg3NzAyLCJleHAiOjE1NDEzOTEzMDJ9.DzzlxztbC4x6bx_qQM6S9KlTR1SEEUT-xLG-I2zRt-c'
    };
    //这地方做前端接口测试的时候，稍微有点坑，window没有定义，跑不通
    let window = window || null;
    if (window && window.sessionStorage.getItem('authorization') + '' != 'null') {
        config.headers['authorization'] = 'Bearer ' + window.sessionStorage.getItem('authorization');
    }
    console.log(config.headers);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// 响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(response);
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
