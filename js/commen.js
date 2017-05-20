/**
 * Created by Administrator on 2016/12/31 0031.
 */
$(function(){
    setSize();
    window.addEventListener("resize",setSize,false);
    function setSize(){
        var oHtml = document.documentElement;
        var oBody = document.getElementsByTagName("body")[0];
        var oWidth = window.innerWidth;
        oHtml.style.fontSize =oWidth/16+"px";
        oBody.style.visibility = "visible";
    }
});