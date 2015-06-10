PageNav
========
分页组件

 Useage
=======
方法一：（推荐）
```js
init(data);

/*
* 初始化组件
* 尽量复用一个对象，一个页面可使用实例化多个组件
*/
function init(data) {
    require(['comp/pagenav/index'], function ($pageNavComp) {
        //复用实例化组件对象
        that.nodes.pageNav = new $pageNavComp(); 
        //渲染组件，并返回节点
        var ndComponent = updatePageNav(data);
        //插入到DOM
        $('.content').html(ndComponent):
        //事件监听
        that.nodes.pageNav.on('pageChange', function (options, e) {
            var target = $(e.target);
            that.updateList(options); //更新数据列表
        });
    });
}
/*
* 渲染组件函数
*/
function updatePageNav(data) {
    var pageNav = this.nodes.pageNav;

    pageNav.options({
        totalCounts: totalCount, //所有数量
        current: current //当前页码
    });
    return pageNav.render();
}

```
####或

```js

/*
* 初始化组件
*/
function initPageNavWeekend (data) {
    var that = this;
    require(['comp/pagenav/index'], function ($pageNavComp) {
        var pageNav = new $pageNavComp(); 
        pageNav.on('pageChange', function (options) {
            that.loadWeek(adcode, options.current);
        });
        pageNav.options({
            length: data.lists.length,
            current: +data.page_num,
        });
        $('.J-pagenav-weekend').html(pageNav.render());
    });
}
/*
* 获取数据，更新列表
* 原有分页模板被清空，需要重新初始化；
*/
function loadWeak() {
    $trans('getWeekendData', {
        data: transConf,
        success: function(data) {
            $('.search_food_cotent_2').append($($tplWeekend({
                data: data,
                current: +pagenum,
                pagenum: +pagenum
            })));                        
            that.initPageNavWeekend(data); //重新初始化pagenav，因为模板已被清空
        },
    }
}
```
#####模板占位符
```html

    <div style="border-top: 1px solid #cbcbcb;">
    ......
    </div>
    <div class="J-pagenav-weekend"></div>
    <% include('../common/footer', { sourcereferer: 9 }) %>

```

Install
=======
