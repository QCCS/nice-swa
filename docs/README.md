# 从0到1搭建前端脚手架
环境依赖 Node v8.0.0

关键字：Grunt , Webpack , babel , ES6 , React , Redux , Ant-design , Material-design , Gzip

此文档只是对搭建脚手架关键步骤进行说明，
详细步骤的代码，可以clone本项目，从不同的分支依次看。
从 master 到 share1 ---- share18 共19个分支，依次添加代码的。
建议是把代码 clone 到本地，根据此文档，依次安装各模块，运行代码，查看分支代码。
如有错误，可以联系我 wechat: qianchaochushui ，或者自行纠正。
代码地址：
```
https://github.com/QCCS/tech-share.git
```


# web开发1.0 
```
git checkout share
```
之前没有前端打包工具的时候，前端属于后端 mvc 中的 view，
一般结合后端mvc框架进行开发web应用。
之前这种开发方式一般适用于前后端一起开发。
比如 SpringMVC，
前端根据设计图，把页面写好，给后端开发
后端把页面需要的数据直接填在页面里面。
当然 react 出来之后，仍然可以用这种方式，
如果我们不用 npm 安装 react
可以用script标签直接引入。
```
git checkout share1
```
## script 标签引入react
引入react,然后写一个组件，没有问题

Vue,Angularjs 一样可以，这里不做示范，可以到官方网站查看

这样开发之后，点击查看网页源码，写的源码全部被看见，加载的文件也大，因为没有压缩。
之后，就这样可以开始引入 gulp，grunt打包工具了。
# grunt

## grunt 压缩代码
grunt ,gulp 出来很久了，在webpack之前，但是目前还有很多项目在用
```
git checkout share2
```
因为要打包，我这边在 js 里面多写两个函数，方便看出打包效果。
为了方便使用，先全局安装一下grunt。
```
npm i -g grunt

```
grunt只是一个工具，还需要依赖很多插件才能完成打包

压缩js

混淆js

压缩css

压缩html

copy文件

替换文件内容

等等等...
自己需要什么插件，就在npm搜索，基本都有，没有的根据需要可以自己手动写一点，

根据打包的配置，
打包完成之后，可以是多页面，或者单页面。
比如我这边要打包之后留下index.html,order.html。

我想打包之后在build目录下，就先建一个build文件夹来装文件。

gulp 与 grunt 写法不大一样，功能差不多。

这种简单的页面可以用这个打包

我们的老中控是用 yeoman-grunt 构建，可以看看，学习 grunt。
老 App 有用 gulp 打包，可以看看,学习 gulp。


# 安装babel

之所以要安装 babel,是因为要写 es6, babel是编译工具，把 es6 编译为 es5,浏览器得以认识。
除了可以编译 es6,react 中的 jsx 语法也可以编译。
添加 .gitignore 文件，不然把不需要上传的文件上传了，浪费上传时间

上面 react 文件没有压缩，是因为写了 jsx 语法依赖 babel 编译，
虽然页面中应入 babel 编译，也可以支持 es6 语法，但是对于工程流程化不方便管理。

另外，gulp 与 grunt 也有相应的插件可以编译。

目前这个浏览器普遍能解析编译es5,我们想写es6，或者react,并且在浏览器实时预览，就需要
把写的 es6 语言编译为 es5,再用浏览器看
可以借助 Node开启服务，websock 实时监听服务响应，
这个服务可以自己用 Node 搭建。

webpack 集成了 dev-server 可以做到这一点。

下面开始用 npm 安装 babel react webpack。
```
git checkout share3
npm install -g babel-cli
npm install babel-preset-es2015 --save-dev

```
添加 .babelrc 文件
```
{
  "presets": ["es2015"],
  "plugins": []
}
```
这样就可以写 es6了，添加一个命令，方便打包
```
//package.json添加
"build": "babel src/index.js -o dist/index.js"
```
编辑器配置ES6

说明：es2015,es2016,es2017 执行的一些标准，业界习惯叫  es6,es7,es8,
都是es5之后的一些标准，目前浏览器普遍支持 ES5。

添加 ES6 语法功能
有不同的阶段，语法有稍微区别
可以选择一个节点的编译依赖
```
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
```
配置文件中可以加入stage-0，来支持ES6的语法
```
{
  "presets": ["es2015", "stage-0"],
  "plugins": []
}
```
这里可以看看 node_modules 里面 babel 依赖了哪些模块。

当准备要在项目中写 react 的时候，需要先安装
babel 对 jsx 语法的编译包
```
npm install --save-dev babel-preset-react
```

可以在 .babelrc 中加入
代表babel编译的时候，把项目中的 jsx 也编译了，不然
打包的时候，项目会不认识 react 的 jsx 语法
```
"presets": ["es2015", "stage-0","react"],
```
加入这样配置之后，就可以用 jsx 语法写，babel依然可以编译为es5


babel编译是编译，就是把es6，es7转换为es5，
但是有一些默认的语法是不会编译的 ，
比如 import 就直接编译为 require，这样浏览器是不会认识的，
当然可以解决，引入比较老的 babel 包，就可以直接编译为浏览器认识的语法
也可以引入打包工具，webpack；

# 安装webpack
```
git checkout share4
npm install --save-dev webpack
```

添加 webpack.config.js，配置文件
输入命令,会自动找到配置文件执行，根据版本不一样，会提示安装 webpack-cli 命令行工具。
```
webpack
```

只是安装了 webpack ,没有安装 react 等相关依赖，可以先把 index.js 其他语言注释，
运行命令，就可以打包成功。


然后把 react jsx 语法写入，webpack 就不认识了，就需要配置 loader。
怎么配置呢，官网看看
```
webpack -v
3.8.1
```

先要安装 loader
```
npm install babel-loader@7 --save
```
加入配置
```
module: {
    rules:[
        {
            test:/\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: { presets: ["react","es2015","stage-0"] }
            }],
        },
    ]
}
```

由于之前一直没有安装 react，react-dom 这里就要报找不到模块
```
import React from 'react';
import ReactDOM from 'react-dom';
```

# 安装react

这里放下一个分支安装模块

```
git checkout -b share5
npm i -save react react-dom
```
为了能讲明白这些，我是分很多步骤来操作的,
安装之后就可以用 webpack 打包了。

## webpack loader

但是还没法用模块加载的方式写样式
```
import ‘./css/index.css’
```

样依赖loader
```
npm install --save-dev css-loader
```
如果不安装或者不配置 css-loader，加载进入的css语法，就像之前没有安装与配置 babel-loader 一样；

webpack 不会认识，就会报错，
安装了 css-loader 只是认识 css 语法不报错。
还需要 style-loader。
```
npm install --save-dev style-loader
```
这样才能把样式加载的html里面，让css生效。
网页中还需要加载图片，需要安装file-loader。
```
npm install --save-dev file-loader
```
各种各样的loader，
可以到官方网站查看，安装与配置方式。
```
https://www.webpackjs.com/loaders/file-loader/
```

sass，scss，less，stylus 等等 loader 就不这里安装了，
之后需要就安装。


但是到这一步，每次打包完，刷新一下浏览器，比较麻烦，
安装一下 devServer实时刷新浏览器。

## 安装webpack-dev-server 

```
git checkout -b share6
npm install --save-dev webpack-dev-server 
```

运行dev-server多说两句
```
webpack-dev-server
```
直接运行，由于不是全局安装，命令行找不到对应的bin执行目录，会报错。
可以这样运行，输入命令。
```
node_modules/.bin/webpack-dev-server
```
会找到当前目录的依赖模块的执行命令，
也可以在配置 package.json。
```
"scripts": {
    "server": "webpack-dev-server --open"
  }
```
自此安装了
```
webpack
babel-loader es6,es7,jsx-react
css-loader
file-loader
devServer
```
简单项目开发就可以直接开发了，
然后稍微整理为一个简单的 webpack+es6+react+css+devServer 的开发脚手架。
```
git checkout -b share7

```
简单的布局好了，
发现开发单页面，需要路由，没有路由，前端就一个，不方便实现。

```
//安装路由
git checkout -b share8

```
# 安装react-router-dom

要在 header 上添加三个路由，
首页，列表，详情，关于；
react-router 4.x 已经拆分为几个包其中 react-router-dom 可以设置路由了。

文档地址：
```
https://reacttraining.com/react-router/web/example/basic

```
安装：
```
npm install --save react-router-dom 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

```

router 安装好了

# 安装 Ant-design

页面很难看，css 又懒得写，安装UI框架
安装 ant-design
```
git checkout -b share9

```

# 安装 Materail-design
```
git checkout -b share10
```
Materail-design react 版本可能版本比较多，
这个网站介绍比较全
```
https://material-ui.com/

```
安装

```
npm install @material-ui/core --save
//使用svg图标
npm install @material-ui/icons --save
//安装之前注意也是有依赖的
react >= 16.3.0 and react-dom >= 16.3.0
//字体图标直接应入
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//图标查看
https://www.materialui.co/icons
```
浏览器兼容性没有 Antd 好，ie > 11,,,,,其他的都可以看网站介绍。

安装之后，就可以根据例子使用了。
还是写一个页面来测试测试组件。

安装一个属性校验的库
```
npm install --save prop-types
//(注:从React v15.5开始 ，React.PropTypes 助手函数已被弃用，
//可使用 prop-types 库 来定义contextTypes)
```

测试组件之后,用md
改造网站。

```
git checkout -b share11
```
左侧导航 header

# 数据管理

## context 提供者与消费者

改造完成，安装 Redux
```
git checkout -b share12
```
先看看 react 16 跨组件通信 context，与全局状态管理
新版本的 React context 使用了 Provider 和 Customer 模式，和 redux-react 的模式非常像。


父组件 提供者。
```
// 声明要提供到Context的对象属性
// 必须定义 getChildContext 方法，返回需要提供的数据
LeftMiddleRight.childContextTypes = {
    lmrContextData: PropTypes.object
};
getChildContext(){
    return {
        lmrContextData:{
            data:"lmr-data"
        }  
    }
}
```
子组件消费者
```
static contextTypes = {
lmrContextData: PropTypes.object,
}
```
这样子，子组件就拿到了父组件，lmrContextData。
父组件没有定义这个，子组件获取不到，就是 undefined。

 
新增的react中，我创建一个应用的上下文数据，
创建appContext，
```
//注意最好不要多次创建（但是可以），不然在消费的时候很难找到 appContext 对应的值
const appContext = React.createContext({
  data1: 'data1',
  data2: 'data2'
});
//单独一个文件创建，导出
```
使用 Provider：
```
导入appContext
<appContext.Provider value={{data1: 'data3', data2: 'data4'}}>
<Header />
</appContext.Provider>
//Provider 的 value就是直接设置 上下文的值
//value={this.state.theme}
```
使用Consumer：
在header组件内部(子组件)。
```
//必须加上 appContext.Consumer
//且子节点必须是函数，不然报错，说不是一个 function
//导入 appContext
<appContext.Consumer>
{context => (
  <div onClick={()=>{this.getContextTest(context)}}>get parent context data</div>
)}
</appContext.Consumer>
```
可以把 context 中的属性，与提供属性值的函数传递到子组件，
这样可以自己调用子组件，就会改变上下文的值。
以上主要讲解新版 context。


## react-redux

便于理解单独一个分支，
安装 react-redux
```
git checkout -b share13
npm install --save react-redux redux
```

### store
创建 store
绑定 store  <Provider store={store}>

---

### action
创建 action

---

### reducer
编写 reducer

---

### 组件中使用
导入相关action
绑定属性
绑定动作
连接组件与redux


### 创建一个 HideFooterAction


最后注意一个小坑：添加 redux 后路由监听失效，
```
const AppWrap = connect(mapStateToProps, mapDispatchToProps,
    undefined,{pure:false})(App);
```


写几个配置文件，与命令
```
//package.json
"dev": "NODE_ENV=dev webpack-dev-server --open",
"prod": "NODE_ENV=prod webpack-dev-server --open",
//webpack.config
let env = process.env;
console.log(env.NODE_ENV)
```

# 安装 Axios

异步请求数据
```
git checkout -b share14
npm install axios --save
//周下载量也是近200W
```

```
//实验性api有点坑 
https://developer.mozilla.org/en-US/docs/Web/API/Body/body
var url = "/api";
    fetch(url, {
        method: "",
        headers: {
        },
        body:{}
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (err) {
        console.log("Fetch错误:" + err);
    });
```

axios 主要介绍点

拦截器统一错误处理

其他可以详细查看文档

项目搭建完毕，
更新脚手架

然后简单讲前端部署
```
git checkout -b share15

```
# 部署，nginx
前端都是静态文件，
可以使用 nginx 代理，
也可以放后端的静态目录。

nginx可以如下配置：

```
server {
    # 监听端口
    listen 8119;
    location / {
        # 根目录
        root path;
        # 入口文件
        index index.html;
    }
}
```
这样访问host:8119就可以访问到指定path文件了。

然后重启 nginx：
```
nginx -s reload
```

关于自动部署，后续考虑添加，
可以单独搞一个项目，做一些钩子函数：

联调,需要把后端脚手架讲完，到时候会写结果接口，进行调试。
```
git checkout -b share16
```

主要就是统一添加一个header，其他地方就目前开发的项目差不多
登陆测试费用的 curd

# 开启 gzip
```
git checkout -b share17
npm i --save-dev compression-webpack-plugin
```
添加 webpack 插件配置：
```
new CompressionWebpackPlugin({
            filename: '[path].gz[query]',// 目标文件名,1.x 这个配置项为asset
            algorithm: 'gzip',// 使用gzip压缩
            test: /\.js$|\.html$/,
            threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
        })
```

nginx
```
server {
    listen 8117;

    gzip on;
    gzip_static on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_comp_level 5;
    gzip_types text/plain application/javascript application/x-javascript text/css text/javascript;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    location / {
        root /root/NODE/for-share/tech-share/dist-share17;
        index index.html;
    }

}
```

然后对比

share13 没压缩 4M

share16 没压缩 20M

share17 压缩   2M

# 添加文档工具
```
npm i docsify-cli -g
docsify init ./docs
docsify serve docs
```
即可本地看见此文档，也可以修改此文档

## 下次继续后端脚手架，请等待 ):