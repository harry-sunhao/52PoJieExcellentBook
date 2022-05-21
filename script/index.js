//---------------------------------------
// 此处是工具栏各按钮的操作函数


window.onload = function () {
    //const win = remote.getCurrentWindow();
    //win.setSize(800, 800);
    //win.setTitle("吾爱破解精华集 2021 v1.0 2022年5月19日19:07:41");
    try {
        const ipcRenderer = require('electron').ipcRenderer;
        console.log("Load ipcRenderer Successful");
        ipcRenderer.send('resize', 1600, 800);
        ipcRenderer.send('resetTitle', "吾爱破解精华集 2021");
    }
	catch
	{
		console.log("Load ipcRenderer Error");
	}

    $("#threadframe").attr('src', 'html/homepage.html');

    var frameWidow = $("#threadframe")[0].contentWindow;
    $(frameWidow).scroll(function (e) {
        var scrollTop = $(frameWidow).scrollTop();
        alert(scrollTop);
    });
    $(frameWidow).scrollTop(200);
};

//以下是浏览框主页按钮点击后的响应函数，跳转目标为电子书主工作目录下的“html/homepage.html”文档。
function gethomepage() {
    $("#threadframe", parent.document.body).attr("src", "html/homepage.html")
    layer.msg('已返回主页！');
}

function treeexpant() {
    var w1 = $(".thread_tree").width(); //取下半部分宽度
    var w2 = $(".thread_body").width(); //取目录树分宽度
    var w3 = w1 / w2; //取二者的商
    var num = w3.toFixed(2); //四舍五入
    //小于等于20但是不等于0视为目录展开，执行收起操作
    if (num <= 0.2 && num != 0) {
        $('.thread_tree')[0].style.setProperty('flex-basis', 0 + 'px', 'important');
        layer.msg('目录已收起！');
    }
    //等于0但是不等于20视为目录展开，执行展开操作
    else if (num == 0 && num != 0.2) {
        $('.thread_tree')[0].style.setProperty('flex-basis', w2 * 0.2 + 'px', 'important');
        layer.msg('目录已展开！');
    }
    //尾部容错
    else {
        $('.thread_tree')[0].style.setProperty('flex-basis', w2 * 0.2 + 'px', 'important');
        layer.msg('目录已复位！');
    }

}
//以下是护眼模式的响应函数
function eyeprot() {
    eyeprotint()
    if ($(".eyeprotchoose").css("display") == "none") {
        $(".eyeprotchoose").css("display", "block");

    } else {
        $(".eyeprotchoose").css("display", "none");
    }
}
// 以下是根据当前颜色来判断边框颜色应该加到哪个颜色的按钮上
function eyeprotint() {
    if ($(".pagebody").css("background-color") == "rgba(0, 0, 0, 0)") {
        $("#colornone").css("border", "2px solid #ff5555")
        $("#colorgreen").css("border", "");
        $("#colorblue").css("border", "");
        $("#colorred").css("border", "");
        $("#coloryellow").css("border", "");
    } else if ($(".pagebody").css("background-color") == "rgb(204, 232, 207)") {
        $("#colorgreen").css("border", "2px solid #ff5555")
        $("#colornone").css("border", "");
        $("#colorblue").css("border", "");
        $("#colorred").css("border", "");
        $("#coloryellow").css("border", "");
    } else if ($(".pagebody").css("background-color") == "rgb(220, 226, 241)") {
        $("#colorblue").css("border", "2px solid #ff5555")
        $("#colornone").css("border", "");
        $("#colorgreen").css("border", "");
        $("#colorred").css("border", "");
        $("#coloryellow").css("border", "");
    } else if ($(".pagebody").css("background-color") == "rgb(253, 230, 224)") {
        $("#colorred").css("border", "2px solid #ff5555")
        $("#colornone").css("border", "");
        $("#colorgreen").css("border", "");
        $("#colorblue").css("border", "");
        $("#coloryellow").css("border", "");
    } else if ($(".pagebody").css("background-color") == "rgb(250, 249, 222)") {
        $("#coloryellow").css("border", "2px solid #ff5555")
        $("#colornone").css("border", "");
        $("#colorgreen").css("border", "");
        $("#colorblue").css("border", "");
        $("#colorred").css("border", "");
    }
}

// 选中颜色后响应函数
function eyeprotleave() {
    $(".eyeprotchoose").css("display", "none");
}

// 取消护眼模式响应函数
function changeNone() {
    if ($(".pagebody").css("background-color") == "rgba(0, 0, 0, 0)") {
        layer.msg('已经关闭了哦！');
    } else {
        $(".pagebody").css("background-color", "transparent");
        $(".thread_tree").css("background-color", "#494949");
        $(".folder").css("color", "#f9f9f9");
        $(".file>a").css("color", "#f9f9f9");
        layer.msg('护眼模式已关闭！');
    }
    eyeprotleave();
}
// 切换至橄榄绿响应函数
function changeGreen() {
    if ($(".pagebody").css("background-color") == "rgb(204, 232, 207)") {
        layer.msg('已经切换成橄榄绿了哦！');
    } else {
        $(".pagebody").css("background-color", "#cce8cf");
        $(".thread_tree").css("background-color", "transparent");
        $(".folder").css("color", "#494949");
        $(".file>a").css("color", "#494949");
        layer.msg('已成功切换成橄榄绿！');
    }
    eyeprotleave();
}
// 切换至海天蓝响应函数
function changeBlue() {
    if ($(".pagebody").css("background-color") == "rgb(220, 226, 241)") {
        layer.msg('已经切换成海天蓝了哦！');
    } else {
        $(".pagebody").css("background-color", "#dce2f1");
        $(".thread_tree").css("background-color", "transparent");
        $(".folder").css("color", "#494949");
        $(".file>a").css("color", "#494949"); ;
        layer.msg('已成功切换成海天蓝！');
    }
    eyeprotleave();
}
// 切换至胭脂红响应函数
function changeRed() {
    if ($(".pagebody").css("background-color") == "rgb(253, 230, 224)") {
        layer.msg('已经切换成胭脂红了哦！');
    } else {
        $(".pagebody").css("background", "#fde6e0");
        $(".thread_tree").css("background-color", "transparent");
        $(".folder").css("color", "#494949");
        $(".file>a").css("color", "#494949");
        layer.msg('已成功切换成胭脂红！');
    }
    eyeprotleave();
}
// 切换至杏仁黄响应函数
function changeYellow() {
    if ($(".pagebody").css("background-color") == "rgb(250, 249, 222)") {
        layer.msg('已经切换成杏仁黄了哦！');
    } else {
        $(".pagebody").css("background-color", "#faf9de");
        $(".thread_tree").css("background-color", "transparent");
        $(".folder").css("color", "#494949");
        $(".file>a").css("color", "#494949");
        layer.msg('已成功切换成杏仁黄！');
    }
    eyeprotleave();
}

//控制全屏
function enterfullscreen() { //进入全屏
    layer.msg('按“F11”退出全屏');
    var docElm = document.documentElement;
    //W3C
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
function exitfullscreen() { //退出全屏
    layer.msg('已退出全屏！');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
function dofullscreen() {
    if (document.fullscreenElement) {
        exitfullscreen();
    } else {
        enterfullscreen();
    }
}

//以下是执行页面打印的响应函数
function threadprint() {
    var obj = window.parent.document.getElementById('threadframe'); //取iframe框架的id
    obj.contentWindow.postMessage("doprint", "*");
}

//以下是依赖于layui模块才能正常工作的函数

//代码复制成功
function shcopyOK() {
    layer.msg('复制成功，赶快分享给小伙伴吧！', {
        icon: 1,
        time: 3000
    }, )
}

//代码复制失败
function shcopyfailed() {
    layer.msg('复制失败！请检查浏览器安全设置是否允许访问剪切板。', {
        icon: 2,
        time: 3000
    }, )
}

//拒绝打印非文章页面
function printreject() {
    layer.alert('很抱歉，本页面不允许打印！此功能仅限打印精华集正文。', {
        area: ['450px', '180px'],
        closeBtn: 1 // 是否显示关闭按钮
    ,
        icon: 2 // icon
    ,
        title: '无法打印此页面',
        shade: 0.8,
    });
}

//联系作者
function contactme() {
    layer.alert('联系我需要登录吾爱破解论坛账号，然后给我发站内信。发送站内信的时候请遵守论坛版规，禁止留QQ、微信等联系方式，对利用私信留联系方式的行为将从重处罚！', {
        area: ['600px', '200px'],
        closeBtn: 1, // 是否显示关闭按钮
        btn: ['确定', '取消'],
        yes: function () {
            window.open('https://www.52pojie.cn/home.php?mod=space&uid=368698'),
            layer.closeAll();
            showabout();
        },
        btn2: function () {
            showabout();
        },
        icon: 3, // icon
        title: '与我联系',
        shade: 0.8,
    });
}

//调出外链附件保存对话框
function outattachdown(tid) {
    var s = tid;
    $('#outattach').attr('src', 'thread/' + s + '/outattach/outattach.html')
    layer.open({
        area: ['800px', '600px'],
        title: '保存外链附件',
        shadeClose: true, //开启遮罩关闭
        shade: 0.8,
        style: "text-align: left;",
        btn: [],
        content: $("#outattach").prop("outerHTML"),
    });
};

//调出关于对话框
function showabout() {
    $('#about').attr('src', 'html/about.html')
    layer.open({
        area: ['800px', '400px'],
        title: '关于',
        shadeClose: true, //开启遮罩关闭
        shade: 0.8,
        style: "text-align: left;",
        btn: ['OK'],
        content: $("#about").prop("outerHTML"),
    });

}
function showWecheat() {
    layer.closeAll();
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: ['auto'],
        skin: 'layui-layer-nobg', //没有背景色
        shadeClose: false,
        shade: 0.8,
        cancel: function () {
            showabout();
        },
        content: $('#52pojie_Wecheat')
    });
}

function showbilibili() {
    layer.closeAll();
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: ['auto'],
        skin: 'layui-layer-nobg', //没有背景色
        shadeClose: false,
        shade: 0.8,
        cancel: function () {
            showabout();
        },
        content: $('#52pojie_bilibili')
    });
}

function bilibilionclick() {
    layer.closeAll();
    showabout();
    window.open('https://space.bilibili.com/544451485/', 'blank');
}

// 以下是收到子框架发来的消息后的响应函数
window.addEventListener('message', function (e) {
    if (e.data === 'dosuccessfully') {
        shcopyOK();
    } else if (e.data === 'dofailed') { //接收并执行网页后退操作
        shcopyfailed()
    } else if (e.data === 'dopagenext') { //接收并执行网页前进操作
        window.history.go(1);
    } else if (e.data === 'dopagerefresh') { //接收并执行网页刷新操作
        location.reload();
    } else if (e.data === 'refuseprint') {
        printreject();
    } else if (e.data === 'scrollTop') {
        collapse();
    } else if (e.data === 'unscrollTop') {
        uncollapse();
    } else if (e.data === 'dowecheat') {
        showWecheat();
    } else if (e.data === 'dobilibili') {
        showbilibili();
    } else if (e.data === 'docontact') {
        contactme();
    } else { //接收子框架发来的tid
        var s = e.data;
        outattachdown(s);
    }
})

//以下是标题栏展开收起操作函数
function collapse() {
    $(".head").css("height", "40px");
    $(".thread").css("height", "calc(100% - 40px)");
    $(".head_right").css("flex-wrap", "nowrap");
}

function uncollapse() {
    $(".head").css("height", "");
    $(".thread").css("height", "");
    $(".head_right").css("flex-wrap", "");
}

// 此处是treeview的一些操作代码
$(document).ready(function () {
    //拖拽目录
    (function () {
        function dragstart(e) {
            $('.thread_darg_cover').show()
            var distenceX = typeof e.pageX === 'number' ? e.pageX : e.originalEvent.changedTouches[0].pageX - $(this).offset().left;
            $('.thread_tree').css('transition', 'none')
            function dragmove(e) {
                var x = typeof e.pageX === 'number' ? e.pageX : e.originalEvent.changedTouches[0].pageX - distenceX;
                if (x < 0) {
                    x = 0;
                } else if (x > $(window).width() - $('.thread_darg').outerWidth(true)) {
                    x = $(window).width() - $('.thread_darg').outerWidth(true);
                }
                $('.thread_tree')[0].style.setProperty('flex-basis', x + 'px', 'important')
            }
            function dragend() {
                $('.thread_tree').css('transition', '')
                $(window).off('mousemove').off('touchmove');
                $('.thread_darg_cover').hide()
            }
            $(window).mouseup(dragend).on('touchend', dragend).mousemove(dragmove).on('touchmove', dragmove);
            return false
        }
        $('.thread_darg').mousedown(dragstart).on('touchstart', dragstart);
        //横屏检测
        new landscape({
            mode: 'landscape',
            prefix: 'landscapetip'
        });
    })();
    // first example
    $("#browser").treeview();

    // second example
    $("#navigation").treeview({
        persist: "location",
        collapsed: true,
        unique: true
    });

    // third example
    $("#red").treeview({
        animated: "fast",
        collapsed: true,
        unique: true,
        persist: "cookie",
        toggle: function () {
            window.console && console.log("%o was toggled", this);
        }
    });

    // fourth example
    $("#black, #gray").treeview({
        control: "#treecontrol",
        persist: "cookie",
        cookieId: "treeview-black"
    });

});
