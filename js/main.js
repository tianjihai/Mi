$(document).ready(function () {
    $(".cart").mouseover(function () {
        $(".cartMain").stop().slideDown(200);
    }).mouseout(function () {
        $(".cartMain").stop().slideUp(200);
    });




    var $li = $(".slider>ul>li");
    var count = 0;

    //默认自动轮播下一张图片
    function lunbo() {
        count++;
        if(count === $li.length){
            count = 0;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
    }
    var lb=setInterval(lunbo,1500);


    //点击下一张切换到下一张图片然后停止自动轮播定时器
    $(".arrow-right").click(function () {
        count++;
        if(count === $li.length){
            count = 0;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
        clearInterval(lb);
    });

    //点击上一张切换上一张图片然后停止自动轮播定时器
    $(".arrow-left").click(function () {
        count--;
        if(count === -1){
            count = $li.length - 1;
        }
        $li.eq(count).fadeIn(400).siblings().fadeOut(400);
        clearInterval(lb);
    });


//左侧菜单栏
    $(".MainMenuRight>ul>li").mouseover(function () {
        $("#"+$(this).index()).stop().fadeIn(80);
    });

    $(".MainMenuRight>ul>li").mouseleave(function () {
        $("#"+$(this).index()).stop().fadeOut(80);
    });


    $(".jiadianMain>ul>li").mouseover(function () {
        $("#1"+$(this).index()).stop().slideDown(80);
    });

    $(".jiadianMain>ul>li").mouseleave(function () {
        $("#1"+$(this).index()).stop().slideUp(80);
    });


    $("#jd2>ul>li").mouseover(function () {
        $("#2"+$(this).index()).stop().slideDown(80);
    });

    $("#jd2>ul>li").mouseleave(function () {
        $("#2"+$(this).index()).stop().slideUp(80);
    });

    $("#jd3>ul>li").mouseover(function () {
        $("#3"+$(this).index()).stop().slideDown(80);
    });

    $("#jd3>ul>li").mouseleave(function () {
        $("#3"+$(this).index()).stop().slideUp(80);
    });

    $("#jd4>ul>li").mouseover(function () {
        $("#4"+$(this).index()).stop().slideDown(80);
    });

    $("#jd4>ul>li").mouseleave(function () {
        $("#4"+$(this).index()).stop().slideUp(80);
    });


    $("#jd11").mouseover(function () {
        $("#jd1").show();
        $("#jd2").hide();
        $("#jd3").hide();
        $("#jd4").hide();
    });
    $("#jd22").mouseover(function () {
        $("#jd2").show();
        $("#jd1").hide();
        $("#jd3").hide();
        $("#jd4").hide();
    });
    $("#jd33").mouseover(function () {
        $("#jd3").show();
        $("#jd2").hide();
        $("#jd1").hide();
        $("#jd4").hide();
    });
    $("#jd44").mouseover(function () {
        $("#jd4").show();
        $("#jd2").hide();
        $("#jd3").hide();
        $("#jd1").hide();
    });

});