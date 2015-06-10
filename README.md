组件化
========

#### 组件基础类

    src/lib/base/compbase

##### Attrbutes

    this.nodes

##### Functions

    initialize()
    options(param1, param2) 
    getData(k); //基于组件实例的变量
    setData(k, v);
    destroy() //依赖this.nodes, 销毁动作

新增组件
=======

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
