define('comp/pagenav/index', ['base/compbase', './tpl/main', './base.css'], function ($Base, $mainTpl) {
    var defaultParam = {
        current: 1,
        totalCounts: 0,
        numPerPage: 10,
        length: 0
    };
    var PageNav = $Base.extend({
        initialize: function(params) {
            var options = $.extend({}, defaultParam, params);
            this.options(options)
        },
        render: function () {
            var params = this.options(params);
            var nd = $($mainTpl(params));
            if (this.nodes) {
                this.nodes.replaceWith(nd);
            }

            this.nodes = nd;
            this.bindEvent();
            return nd;
        },
        bindEvent: function () {
            var that = this;
            var nd = this.nodes;
            nd.delegate('.J_next', 'click', function (e) {
                var options = that.options();
                options.current =  options.current + 1;
                that.render(options);
                $(window).scrollTop(0);
                that.emit('pageChange', options, e);
                M.util.tracker('event', 'button', 'click', 'pagenav', 'next');
            });
            nd.delegate('.J_prev', 'click', function (e) {
                var options = that.options();
                options.current =  options.current - 1;
                that.render(options);
                $(window).scrollTop(0);
                that.emit('pageChange', options, e);
                M.util.tracker('event', 'button', 'click', 'pagenav', 'prev');
            });
        },
        remove: function () {
            this.nodes.hide();
        }
    });
    return PageNav;
});
