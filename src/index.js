//https://github.com/yunshaoyy/toolsbox
const { app, BrowserWindow, screen } = require('electron/main')
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
}

app.on('ready', () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  screenWidth = width;
  screenHeight = height;
});

function createChat() {
  const win = new BrowserWindow({
    width: 500,
    height: 250,
    x: screenWidth - 500,
    y: screenHeight - 250,
    resizable: false,
    frame: false,
    skipTaskbar: true,
  })
  win.loadFile('src/bar/index.html')
}


function createDesk() {
  const win = new BrowserWindow({
    frame: false,
    transparent: true,
    skipTaskbar: true,
    width: screenWidth,
    height: screenHeight,
  })
  win.setIgnoreMouseEvents(true)
  win.loadFile('src/desk/index.html')
}

app.whenReady().then(() => {
  createDesk()
  createChat()
})

app.on('web-contents-created', (e, webContents) => {
  webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        maximizable: false,
        resizable: false,
        width: screenWidth,
        height: screenHeight,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        }
      }
    };
  });
});