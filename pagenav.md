PageNav
========
分页组件

 Useage
=======
```js
init(data);

function init(data) {
    require(['comp/pagenav/index'], function ($pageNavComp) {
        that.nodes.pageNav = new $pageNavComp(); 
        $('.content').html(updatePageNav(data)):
        that.nodes.pageNav.on('pageChange', function (options, e) {
            var target = $(e.target);
            that.updateList(options); //更新数据列表
        });
    });
}
function updatePageNav(data) {
    var pageNav = this.nodes.pageNav;

    pageNav.options({
        totalCounts: totalCount, //所有数量
        length: length, //当前页数据量
        current: current //当前页码
    });
    return pageNav.render();
}
```

Install
=======
