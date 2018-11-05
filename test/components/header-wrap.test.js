/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
//enzyme库，渲染react为节点，方便捕获测试
import { mount ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderWrap from '../../src/components/header-wrap';
//配置 enzyme 与 react-16
configure({ adapter: new Adapter() });
// 配置样式忽略
// moduleNameMapper: {
//     "^[./a-zA-Z0-9$_-]+\\.css": "<rootDir>/src/styles/empty.css",
// },

// describe 测试条件
describe('组件两个包含测试', function () {
    it('测试header-wrap组件', function () {
        const wrapper = mount(
            <HeaderWrap></HeaderWrap>
        );
        const p = wrapper.find('.header-wrap-test');
        expect(p.text()).toBe('header-test');
    });
});

// 不能引入样式
// 测试UI样式,截屏，E2E测试比较合适
// 测试异步函数 比较麻烦
