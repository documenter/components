PageNav
========
分页组件

 Useage
=======
方法一：（推荐）
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
        current: current //当前页码
    });
    return pageNav.render();
}

```
####或

```js

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
```html

    <div style="border-top: 1px solid #cbcbcb;">
    ......
    </div>
    <div class="J-pagenav-weekend"></div>
    <% include('../common/footer', { sourcereferer: 9 }) %>

```

Install
=======
