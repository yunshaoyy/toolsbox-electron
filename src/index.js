//https://github.com/yunshaoyy
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

function createBar() {
  const win = new BrowserWindow({
    width: 400,
    height: 40,
    x: (screenWidth - 400) / 2,
    y: screenHeight - 40,
    resizable: false,
    frame: false,
    skipTaskbar: true,
    transparent: true,
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
  createBar()
})

app.on('web-contents-created', (e, webContents) => {
  webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        width: screenWidth,
        height: screenHeight,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        }
      }
    };
  });
});