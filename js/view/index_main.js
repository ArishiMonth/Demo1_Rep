/**
 * Created by Huqian on 2017/2/28.
 */

require.config({
    baseUrl: "js/",
    urlArgs: "",
    paths: {
        base: 'base',
        bootstrap:'lib/bootstrap-3.3.5-dist/js/bootstrap'
    },
    shim: {
        bootstrap: ['base'],
        index: ['base','bootstrap']
    }
});
require(["base", "bootstrap"], function (base, bootstrap) {
    function Index() {
        this.init();
    }

    Index.prototype = {

        /**
         * 初始化页面
         * author: ghj
         * time: 2013-05-17 22:58:29
         */
        init: function () {
            this.render();
        },

        /**
         * 渲染页面
         * author: ghj
         * time: 2013-05-17 22:58:32
         */
        render: function () {

        }
    };

    this.index = new Index();
});
