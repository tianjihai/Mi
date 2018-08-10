$(document).ready(function () {
    $(".cart").mouseover(function () {
        $(".cartMain").stop().slideDown(200);
    }).mouseout(function () {
        $(".cartMain").stop().slideUp(200);
    })

});