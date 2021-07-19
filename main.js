/*import electron module and store it inside two local constant object variables app and BrowserWindow*/
//get these sub modules from electron
const {
  app,
  BrowserWindow,
  Menu
} = require('electron')
const rclnodejs = require('rclnodejs')
const path = require('path')

var node
var publisher
var count = 0

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

const menu_template = [{
  label: 'menu 1',
  submenu: [{
    label: 'hehe',
    click: async () => {
      var string_count = String(count)
      publisher.publish(string_count)
      count = count + 1
    }
  }]
}]


rclnodejs.init().then(() => {
  node = new rclnodejs.Node('publisher_example_node');
  publisher = node.createPublisher('std_msgs/msg/String', 'topic');
  node.spin();
});


app.whenReady().then(() => {
  createWindow()
  /*
    const menu = Menu.buildFromTemplate(menu_template)
    Menu.setApplicationMenu(menu)
  */
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})