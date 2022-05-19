$(document).scroll(function () {
    var viewHeight =$(window).height();//可见高度
    var top=$(window).scrollTop();
    if(top>viewHeight){
        window.parent.postMessage("scrollTop", "*");
    }else if (top==0){
        window.parent.postMessage("unscrollTop", "*");
    }
});