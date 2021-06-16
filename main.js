/*import electron module and store it inside two local constant object variables app and BrowserWindow*/
const { app, BrowserWindow } = require('electron')
const rcl_main = require('rclnodejs')


function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow()

const rclnodejs = require('rclnodejs');
rclnodejs.init().then(() => {
  const node = new rclnodejs.Node('publisher_example_node');
  const publisher = node.createPublisher('std_msgs/msg/String', 'topic');
  publisher.publish(`Hello ROS 2 from rclnodejs`);
  node.spin();
});
})
