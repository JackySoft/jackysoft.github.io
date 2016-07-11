/**
 * Created by Administrator on 2016/7/11.
 */
$(function () {
    $.getJSON("data.json","",function (data) {
        if(data){
            var ejs = new EJS("tmpl/goodsListTmpl.ejs").render(data);
            $("#goodsList").html(ejs);
        }
    },"json");
    var data = {
        "name":"goodsList",//商品列表
        "data":[//list
        {
            "href":"/list/index/228.html",
            "img":"http://pic.jiguo.com/200717/0/7c3f92ae-97f1-4044-a65b-e4485828c941/320X188",
            "title":"史上最“有病”品牌，钱包、帽子全部用纸做！"
        },
        {
            "href":"/list/index/228.html",
            "img":"http://pic.jiguo.com/200717/0/7c3f92ae-97f1-4044-a65b-e4485828c941/320X188",
            "title":"史上最“有病”品牌，钱包、帽子全部用纸做！"
        }
    ]
    }

    var ejs = new EJS("tmpl/goodsListTmpl.ejs").render(data);
    $("#goodsList").html(ejs);
    // $.ajax({
    //     type:"get",
    //     url:"data.json",
    //     dataType:"json",
    //     success:function (res) {
    //         var ejs = new EJS("tmpl/goodsListTmpl.ejs").render(res);
    //         $("#goodsList").html(ejs);
    //     },
    //     error:function (error) {
    //
    //     }
    // });
});