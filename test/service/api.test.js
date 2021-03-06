/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
//enzyme库，渲染react为节点，方便捕获测试
import { mount ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//配置 enzyme 与 react-16
configure({ adapter: new Adapter() });
// 配置样式忽略
// moduleNameMapper: {
//     "^[./a-zA-Z0-9$_-]+\\.css": "<rootDir>/src/styles/empty.css",
// },
import {createPost} from '../../src/service/post-api';
import {loginService} from '../../src/service/api';
describe('测试APi', function () {
    // async/await can also be used with `.resolves`.
    // header配置要 authorization
    it('works with async/await and resolves', async () => {
        //承诺验证
        //不然有异步的情况，会当异步执行完的时候，测试早已完成。
        expect.assertions(1);
        let params = {
            title: "title",
            desc: "desc",
            content: "content",
            is_delete: 1,
            is_draft: 1,
        };
        //401
        const data = await createPost(params);
        console.log(data.data)
        expect(data.data.title).toBe('title');
    });

    //header配置不要 authorization
    // it('登陆接口', async () => {
    //     expect.assertions(1);
    //     let params = {
    //         mobile: "15921552991",
    //         password: "mac123"
    //     };
    //     const data = await loginService(params);
    //     expect(data.data.mobile).toBe("15921552991");
    // });
});


