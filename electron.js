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
    // transparent: true,
    // // backgroundColor: "#000000",
    // frame: false,
    // resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  const urlLocation = isDev ? "http://localhost:3000" : "myUrl"; // myUrl线上地址
  mainWindow.webContents.openDevTools();
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









//测试  还没有处理router
const express = require('express')
const request = require('request')
const appExpress = express()
const port = 3335

appExpress.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age', 1728000); //预请求缓存20天
  next();
});
// 手机号
appExpress.post('/phoneLogin', (req, res) => {
  const { mobile, password } = req.query
  const auth = new Buffer('vdms:vdms').toString('base64')
  request(`https://test-dec.virtueal.cn/gateway/v-oauth-server/oauth/token?grant_type=mobile_password&mobile=${mobile}&password=${password}&account_type`, {
    method: 'post',
    body: JSON.stringify(req.query),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`
    }
  }, (error, response, body) => {
    res.send(JSON.parse(body));
  })
})

// 邮箱登录
appExpress.post('/emailLogin', (req, res) => {
  const { email, password } = req.query
  const auth = new Buffer('vdms:vdms').toString('base64')
  console.log(email, password, auth)
  request(`https://test-dec.virtueal.cn/gateway/v-oauth-server/oauth/token?grant_type=email_password&email=${email}&password=${password}&account_type`, {
    method: 'post',
    body: JSON.stringify(req.query),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`
    }
  }, (error, response, body) => {
    res.send(JSON.parse(body));
  })
})


appExpress.post('/get/service/limit', (req, res) => {
  let Cookies = getCook(req.headers.cookie)
  request('https://test-dec.virtueal.cn/gateway/v-product/get/service/limit', {
    method: 'post',
    body: JSON.stringify({
      "appCode": "dec"
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.token}`
    }
  }, (error, response, body) => {
    res.send(JSON.parse(body));
  })
})

appExpress.post('/get/iplogin/auth', (req, res) => {
  let Cookies = getCook(req.headers.cookie)
  request('https://test-dec.virtueal.cn/gateway/v-license-server/license', {
    method: 'post',
    body: JSON.stringify(req.query),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.token}`
    }
  }, (error, response, body) => {
    if(response.statusCode == 401 || response.statusCode == 403){
      res.send({
        code:401,
        data:'',
        msg:'鉴权失败'
      });
    }else{
      res.send(JSON.parse(body));
    }
  })
})



function getCook(headCook) {
  var Cookies = {};
  if (headCook != null) {
    headCook.split(';').forEach(l => {
      var parts = l.split('=');
      Cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
  }
  return Cookies
}

appExpress.listen(port, () => {
  console.log(`Server running at  http://127.0.0.1:${port}`)
})