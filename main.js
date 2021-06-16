/*import electron module and store it inside two local constant object variables app and BrowserWindow*/
const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow()
})
