const { app, BrowserWindow, ipcRenderer, ipcMain, Menu } = require("electron");
const isDev = require("electron-is-dev");
// const Store = require('electron-store')
// const menuTemp = require('./src/temp/menuTemp')

// Store.initRenderer()

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    transparent: true,
    // backgroundColor: "#000000",
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  const urlLocation = isDev ? "http://localhost:3000" : "myUrl"; // myUrl线上地址
  // mainWindow.webContents.openDevTools();
  mainWindow.loadURL(urlLocation);
  // 登录窗口最小化
  ipcMain.on("window-min", function () {
    mainWindow.minimize();
  });
  // 登录窗口最大化
  ipcMain.on("window-max", function () {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
  // 关闭窗口
  ipcMain.on("window-close", function () {
    mainWindow.close();
  });
  // 添加自定义的原生菜单
  // const menu = Menu.buildFromTemplate(menuTemp)
  // Menu.setApplicationMenu(menu)
});
