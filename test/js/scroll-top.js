btn_top = document.getElementById("scroll_top");

window.onscroll = function() {scroll_function()};
function scroll_function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        btn_top.style.display="block";
    }
    else{
        btn_top.style.display="none";
    }
}

function click_to_top(){
    document.documentElement.scrollTop=0;
}