组件化
========

#### Super Class

    src/lib/base/compbase

##### Attrbutes

    this.nodes
#### Implements

    Event
    https://github.com/aralejs/events
     
##### Interface Functions

    initialize() //初始化
    render(options); //渲染组件
    bindEvent(); //事件绑定
    
    
##### Inherit Super Functions

    options(param1, param2) //设置或获取options对象
    getData(k); // get
    setData(k, v); // set
    destroy() //依赖this.nodes, 销毁this.nodes节点对象，可覆盖重写
    
###Start a component
=======
####规范：
> 组件名一律小写

> 入口文件：index.js

> 基础css：base.css

> 渲染的组件要赋值到this.nodes


```js
define('comp/test/index', ['base/compbase', './tpl/main', './base.css'], function ($Base, $mainTpl) {
    var Text = $Base.extend({
        initialize: function(params) {
            this.options(params);
        },
        render: function () {
            var nd;
            nd = $($mainTpl(params));
            this.nodes = nd;
            this.bindEvent();
            return nd;
        },
        bindEvent: function () {},
        return Text
    });
}:
```
###How to Destroy Components（M站框架逻辑）

```js
//lib/base/base.js
function detach() {
    .....
    this.destroyComponents();
}
//.....
destroyComponents: function () {
    for(var i in this.comps) {
        if (this.comps[i].destroy) {
            this.comps[i].destroy();
        }
    }
},
//src/lib/mod/detail/index.js
this.comps.downloadTips = new DownloadTips(options);
```
