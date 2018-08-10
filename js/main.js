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



});