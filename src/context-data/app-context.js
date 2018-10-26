/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';

const appContext = React.createContext({
    createContext1: 'createContext1',//可以先赋一个初始值
    createContext10: 'createContext10',//可以先赋一个初始值，在提供者Provider属性value可以设置
});

export default appContext;