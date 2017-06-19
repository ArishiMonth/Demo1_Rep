/**
 * Created by Arishi on 2017/6/29.
 * 简单编辑器（文本与图片上传）
 */

require.config({
    baseUrl: "../js/",
    urlArgs: "",
    paths: {
        base: 'base',
        bootstrap:'lib/bootstrap-3.3.5-dist/js/bootstrap',
        sortable:'lib/fileinput/plugins/sortable',
        purify:'lib/fileinput/plugins/purify',
        fileinput:'lib/fileinput/fileinput'
    },
    shim: {
        bootstrap: ['base'],
        sortable:['base','bootstrap'],
        purify:['base','bootstrap'],
        fileinput:['base','bootstrap','sortable','purify'],
        editor_Input: ['base','bootstrap','sortable','purify','fileinput']
    }
});
require(["base", "bootstrap",'sortable','purify','fileinput'], function (base, bootstrap,sortable,purify,fileinput) {
    function Editor_Input() {

        this.init();
    }

    Editor_Input.prototype = {

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
           this.quweryImg();
        },
        bindEnvent:{
            /**
             * 图片上传方法触发
             * */
          ImgUpload:function(){
            $(document).on("click","#addImg",function(){
                $("#file").trigger("click");
            });
          }
        },
        /**
         * 插件初始化
        **/
        quweryImg:function () {
            $("#file").fileinput({
                uploadUrl: "/file-upload-batch/1",
                uploadAsync: false,
                showCaption: false,
                browseClass: "btn btn-primary btn-lg",
                fileType: "image",
                previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
                overwriteInitial: false,
                previewSettings:{
                    image: {width: "110px", height: "110px"}
                },
                initialPreviewAsData: true,
                initialPreviewFileType: 'image',
                initialPreview: [],
                initialPreviewConfig: []
            });
        }
    };

    this.editor_Input = new Editor_Input();
});
