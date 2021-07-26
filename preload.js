const  ROSLIB = require('roslib');




var ros = new ROSLIB.Ros();

ros.on('error', function(error) {
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('error').style.display = 'inline';
    console.log(error);
  });

  // Find out exactly when we made a connection.
  ros.on('connection', function() {
    console.log('Connection made!');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('connected').style.display = 'inline';
  });

  ros.on('close', function() {
    console.log('Connection closed.');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'inline';
  });

  // Create a connection to the rosbridge WebSocket server.
  ros.connect('ws://localhost:9090');

  // Publish a Topic
  var example = new ROSLIB.Topic({
    ros : ros,
    name : '/example_topic',
    messageType : 'std_msgs/String'
  });

  var count = 0;
  setInterval(() => {
    var message = 'hello from ros2bridge ' + count++;
    example.publish({data: message});
    document.getElementById("publisher").innerText = message;
  }, 1000);
