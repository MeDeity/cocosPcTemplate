const { app, BrowserWindow } = require('electron')

const baseConfig = {
  width: 1280,
  height: 720,
  windowTile:'DemoTitle'
}

const windowConfig = {
  width: baseConfig.width,
  height: baseConfig.height,
  show: true,
  fullscreen: false,
  resizable: false,
  frame: true,
  title: baseConfig.title
}

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

    mainWindow = new BrowserWindow(windowConfig);

    mainWindow.loadURL('file://' + __dirname + '/cocosExport/web-desktop/index.html').then(() =>{
       console.info('load index.html success')
    });

    mainWindow.removeMenu();

    mainWindow.on('closed', function() {
      mainWindow = null;
    });
});