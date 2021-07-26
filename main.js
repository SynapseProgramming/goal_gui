/*import electron module and store it inside two local constant object variables app and BrowserWindow*/
const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
//const  ROSLIB = require('roslib');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}


app.whenReady().then(() => {
  createWindow();

})
