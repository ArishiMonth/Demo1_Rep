/**
 * Created by Huqian on 2017/2/28.
 */

require.config({
    baseUrl: "../js/",
    urlArgs: "",
    paths: {
        base: 'base',
        bootstrap:'lib/bootstrap-3.3.5-dist/js/bootstrap',
        drag:'lib/jquery-ui/jquery-ui.min'
    },
    shim: {
        bootstrap: ['base'],
        drag:['base'],
        panelChange: ['base','bootstrap','drag']
    }
});
require(["base", "bootstrap","drag"], function (base, bootstrap,drag) {
    function PanelChange() {
        this.maxnum=3;
        this.flag = false;
        this.pointLst=[];
        //this.nx,this.ny,this.dx,this.dy,this.x,this.y ;
        this.init();
    }

    PanelChange.prototype = {

        /**
         * 初始化页面
         * author: ghj
         * time: 2013-05-17 22:58:29
         */
        init: function () {
            this.cur={offset:{left:0,top:0},position:{left:0,top:0}};
            this.point={offset:{x:0,y:0},position:{x:0,y:0}};
            this.render();
        },

        /**
         * 渲染页面
         * author: ghj
         * time: 2013-05-17 22:58:32
         */
        render: function () {
            this.bindEnvent.upEnvent.call(this);
            this.setPanelPoint();
        },
        bindEnvent:{
            upEnvent:function(){
                var that=this;


                $( ".panel-default" ).draggable( {drag: function( event, ui ) {

                }, start: function( event, ui ) {
                    var obj=document.elementFromPoint(event.clientX,event.clientY);
                    // console.log(obj)
                    if($(obj).hasClass("panel-body")){
                        event.preventDefault();
                        return;
                    }
                    that.cur.position={left:ui.position.left,top:ui.position.top};
                    that.cur.offset={left:ui.offset.left,top:ui.offset.top};
                    that.point.position={x:event.clientX,y:event.clientY};
                    that.point.offset={x:ui.offset.left,y:ui.offset.top};
                    $(event.target).css("z-index",9999);
                },stop: function( event, ui ) {
                    $(event.target).css("z-index",99);
                    var x=ui.position.left- that.cur.position.left,
                        y=ui.position.top-that.cur.position.top;
                   // console.log(document.elementFromPoint(event.clientX,event.clientY))

                    if(event.target.clientWidth/2<=Math.abs(x) || event.target.clientHeight/2<=Math.abs(y)){
                      //  var addx=x<0?Math.ceil(x/event.target.clientWidth):Math.floor(x/event.target.clientWidth),
                    //        addy=y<0?Math.ceil(y/event.target.clientHeight):Math.floor(y/event.target.clientHeight);
                        var addx=Math.round(x/event.target.clientWidth),
                            addy=Math.round(y/event.target.clientHeight);

                        $(event.target).css("left",(310*addx+that.cur.position.left)+"px");
                        $(event.target).css("top",(310*addy+that.cur.position.top)+"px");
                      var id=  that.getCoverPoint(ui);
                      if(id!=""){
                          $(id).css("left",(-310*addx+that.cur.position.left)+"px");
                          $(id).css("top",(-310*addy+that.cur.position.top)+"px");
                      }
                      that.setPanelPoint();
                    }else{
                        $(event.target).css("left",that.cur.position.left+"px")
                        $(event.target).css("top",that.cur.position.top+"px")
                    }

                }
                });
            }
        },
        setPanelPoint:function(){
            var that=this;
            that.pointLst=[];
            $.each($(".panel-default"),function(e,item){
                that.pointLst.push({id:$(item).data("id"),left:item.offsetLeft,top:item.offsetTop});
            });
        },
        getCoverPoint:function(ui){
            var that=this;
            var id="";
            $.each(that.pointLst,function(i,item){
                if(ui.offset.left>=item.left && ui.offset.left<item.left+300
                && ui.offset.top>=item.top && ui.offset.top<=item.top+300){//||
                    id="home"+item.id;
                    return;
                }
            });
            return id;
     }

    };

    this.panelChange = new PanelChange();
});
