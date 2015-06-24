DownloadTips
========
下载提示组件

 Useage
=======
```js
        var that = this;
        require(['comp/downloadtips/index'], function ($downloadTips) {
            var ndTips;
            var instance = new $downloadTips();

            ndTips = instance.render({desc: '0流量导航，APP专享！'});
            that.comps.downloadtips = instance;
            ndTips.insertBefore(....);
        });

```
