var sec2_i=0;
var timer;

s2()
timer=setInterval(s2int, 3000)

$(".section2 .container .round-btn .circle").click(function(){
    sec2_i=$(this).index()
    s2()
})

$("header .container .menu .menu-li").mouseenter(function(){
    menu_i=$(this).index();
    console.log(menu_i)
    $("header .container .menu .menu-li").eq(menu_i).find(".sub").stop().slideDown()
})

$("header .container .menu .menu-li").mouseleave(function(){
    menu_i=$(this).index();
    $("header .container .menu .menu-li").eq(menu_i).find(".sub").stop().slideUp()
})

$(".ham-btn").click(function(){
    $("body").toggleClass("noti-active")
    $(".noti-box .bg").stop().fadeToggle()
})

$(".noti-box .bg").click(function(){
    $("body").removeClass("noti-active")
    $(".noti-box .bg").stop().fadeOut()
})

$(".noti-box .side-box .boxin").click(function () {
    num = $(this).index()
    sb()
})

function sb() {
    $(".noti-box .side-box .boxin").not($(".noti-box .side-box .boxin").eq(num)).find(".menu_inside").slideUp()
    $(".noti-box .side-box .boxin").eq(num).find(".menu_inside").slideDown()
}

function s2() {
    console.log("section2" + sec2_i)
    $(".section2 .container .round-btn .circle").eq(sec2_i).css({backgroundColor:"#00569F", width:"40px"})
    $(".section2 .container .round-btn .circle").not($(".section2 .container .round-btn .circle").eq(sec2_i)).css({backgroundColor:"white", width:"20px"})
    $(".section2 .container .left img").eq(sec2_i).fadeIn(400)
    $(".section2 .container .left img").not($(".section2 .container .left img").eq(sec2_i)).fadeOut(400)
    $(".section2 .container .right .text").eq(sec2_i).fadeIn(200)
    $(".section2 .container .right .text").not( $(".section2 .container .right .text").eq(sec2_i)).fadeOut(200)
}

function s2int() {
    sec2_i++;
    sec2_i = sec2_i%6;
    s2()
}

