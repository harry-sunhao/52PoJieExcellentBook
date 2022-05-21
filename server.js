const {
    app,
    BrowserWindow
} = require('electron')
    const {
    shell
} = require('electron')
    const {
    Notification
} = require('electron');
const {
    Menu,
    MenuItem
} = require('electron');
const {
    globalShortcut
} = require('electron');
const ipcMain = require('electron').ipcMain;
// 创建主窗口，设置了宽高等信息
function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 600,
        fullscreenable: true,
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    const menu = new Menu();
    menu.append(new MenuItem({
            label: '复制',
            role: 'copy'
        }));
    menu.append(new MenuItem({
            label: '全选',
            role: 'selectall'
        }));
    menu.append(new MenuItem({
            label: '关闭',
            click: function () {
                app.quit()
            }
        }));
    //toggledevtools
    menu.append(new MenuItem({
            label: '调试',
            role: 'toggledevtools'
        }));
    menu.append(new MenuItem({
            label: '关于',
            click: function () {
                mainWindow.webContents.executeJavaScript('showabout();')
            }
        }));
    mainWindow.fullScreenable = true
        // 加载主页面内容 index.html
    mainWindow.loadFile('index.html')
    //mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
    //mainWindow.setFullScreen(true)
    mainWindow.on('enter-full-screen', function () {
        mainWindow.unmaximize()
    })
    mainWindow.on('leave-full-screen', function () {
        mainWindow.unmaximize()
    })
    // 渲染进程监听右键事件，显示出对应菜单
    mainWindow.webContents.on("context-menu", function (pageInfo) {
        menu.popup(mainWindow)
    })
	return mainWindow;
}

ipcMain.on('resize', function (event, height, width) {
    console.log(height, width);
    mainWindow.setSize(height, width);
    event.returnValue = 'success';
});

ipcMain.on('resetTitle', function (event, newTitle) {
    console.log(newTitle);
    mainWindow.setTitle(newTitle);
    event.returnValue = 'success';
});

app.on('ready', () => {
    var mainWindow = createWindow()
    // 隐藏菜单栏
    Menu.setApplicationMenu(null);

    globalShortcut.register('F11', function () {
        mainWindow.webContents.executeJavaScript('exitfullscreen();')
    })
    globalShortcut.register('ESC', function () {
        mainWindow.webContents.executeJavaScript('exitfullscreen();')
    })
});
app.on('web-contents-created', (e, webContents) => {
    webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url)
    });
});

app.on('will-quit', function () {
    // Unregister a shortcut.
    globalShortcut.unregister('F11');
    globalShortcut.unregister('ESC');
    // Unregister all shortcuts.
    globalShortcut.unregisterAll();
});
