const {app, BrowserWindow } = require('electron')
const { shell } = require('electron')
const { Notification } = require('electron');
const { Menu,MenuItem } = require('electron');
const { globalShortcut} = require('electron');
const { remote } = require("electron");



function showNotification (str){
  const notification = {
    title: "提示",
    body: str,
	lang:"zh-CN",
	silent:"true"
  }
  new Notification(notification).show()
}


// 创建主窗口，设置了宽高等信息
function createWindow() {

    const menu = new Menu();
    menu.append(new MenuItem({label:'复制', role: 'copy' }));
    menu.append(new MenuItem({ label:'全选', role: 'selectall' }));
	menu.append(new MenuItem({label:'关闭', click: function () {
        app.quit()
      } }));
	//toggledevtools
	menu.append(new MenuItem({ label:'调试', role: 'toggledevtools' }));
	mainWindow = new BrowserWindow({
        width: 1280,
        height: 600,
		fullscreenable: true,
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true,
			enableRemoteModule: true
        }
    })
	
	mainWindow.fullScreenable=true
    // 加载主页面内容 index.html
    mainWindow.loadFile('index.html')
	//mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
	//mainWindow.setFullScreen(true)
	mainWindow.on('enter-full-screen',function(){
		mainWindow.unmaximize()
	})
	mainWindow.on('leave-full-screen',function(){
		mainWindow.unmaximize()
	})
	 // 渲染进程监听右键事件，显示出对应菜单
 mainWindow.webContents.on("context-menu", function(pageInfo) {
   menu.popup(mainWindow)
 })
}



app.on('ready', () => {
    createWindow()
    // 隐藏菜单栏
	Menu.setApplicationMenu(null);
	
	
	globalShortcut.register('F11', function() {
		mainWindow.setFullScreen(false)
	})
	globalShortcut.register('ESC', function() {
		mainWindow.setFullScreen(false)
	})
});
app.on('web-contents-created', (e, webContents) => {
    webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url)
    });
});

app.on('will-quit', function() {
  // Unregister a shortcut.
  globalShortcut.unregister('F11');
  globalShortcut.unregister('ESC');
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});
