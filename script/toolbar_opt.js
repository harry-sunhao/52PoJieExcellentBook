window.addEventListener('message', function (e) {
    if (e.data === 'doprint') {
        // 针对IE的打印操作
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            var obj = window.parent.document.getElementById('threadframe');//取iframe框架的id。
            obj.contentWindow.focus();//得到焦点
            obj.contentWindow.print();//执行打印
        } else {
            // 不是IE内核就随便了。
            window.print();
        }
     } else if (e.data === 'dopageback') {             //接收并执行网页后退操作
        window.history.back(-1);
    } else if (e.data === 'dopagenext') {              //接收并执行网页前进操作
        window.history.go(1);
    } else if (e.data === 'dopagerefresh') {           //接收并执行网页刷新操作
        location.reload();
    }
})