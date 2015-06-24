组件化
========

#### Super Class

    src/lib/base/compbase

##### Attrbutes

    this.nodes

##### Abstract Functions

    initialize()
    options(param1, param2) 
    getData(k); //基于组件实例的变量
    setData(k, v);
    destroy() //依赖this.nodes, 销毁动作

Start a component
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
##How to Destroy in M（M站框架逻辑）

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
this.downloadTips = new DownloadTips(options);
```
