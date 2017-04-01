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
        this.maxnum=3;
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
           this.bindEnvent.upEnvent.call(this);
        },
        bindEnvent:{
            upEnvent:function(){
                var that=this;

                $('body').scrollspy({ target: '#navbar-example' });
                $('[data-spy="scroll"]').each(function () {
                    var $spy = $(this).scrollspy('refresh')
                })
                $('#myScrollspy').on('activate.bs.scrollspy', function () {
                    var $spy = $(this).scrollspy('refresh')
                })
                $(document).on('click','div[name=up]',function () {
                    var num=$(this).attr("data-num");
                  if(that.maxnum<Number(num)){
                      num=1;
                  }
                  $("#home"+num).removeClass('hide').siblings('div').addClass('hide');
                  num++;
                  $(this).attr("data-num",num);
                });
            }
        }
    };

    this.index = new Index();
});
