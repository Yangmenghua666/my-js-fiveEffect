var flag = 1;
$(document).ready(function(){
    $(".div_left_tag").click(function(){
        $(".div_bottom").slideToggle(400);
        $(".div_left_tag").hide(400);
    });
    $(".span_close").click(function(){
        $(".div_bottom").slideToggle(400);
        $(".div_left_tag").show(400);
        flag = 2;
    });
})
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 700 && flag == 1){
        $(".div_left_tag").hide(400);
        $(".div_bottom").slideToggle(400);
        flag = 0;
    }
    if(scrollTop <= 700 && this.flag == 0){
        $(".div_left_tag").show(400);
        $(".div_bottom").slideToggle(400);
        flag = 1;
    }
  }