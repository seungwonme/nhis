document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#layerPopup button").addEventListener("click", function(){
    document.querySelector("#layerPopup").style.display="none";
})
});



$(function(){
    $(".gnbMenu, .topMenu").mouseover(function () {
        $(".gnbMenu").stop().slideDown(150);
    });
    $(".gnbMenu, .topMenu").mouseleave(function () {
        $(".gnbMenu").stop().slideUp(150);
    });
});