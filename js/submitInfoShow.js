$(document).ready(function(){
    var scroll = $(".ul_Carousel_content li");
    var num = 0;
    function setTime(){
        let letTime = setInterval(function(){
            num--;
            scroll[0].style.marginTop = num + "px";
            if(num <= -100){ 
                num = 0;
            }
        },80);
        return letTime;
    }
    var time = setTime();
    $(".div_Carousel").mouseenter(function(){
        clearInterval(time);
    });
    $(".div_Carousel").mouseleave(function(){
        time = setTime();
    });
})