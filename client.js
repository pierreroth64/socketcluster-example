var socketCluster = require('socketcluster-client');

var options = {
    hostname: 'localhost',
    port: 8000
};

// Initiate the connection to the server
var socket = socketCluster.connect(options);
socket.on('connect', function () {
    console.log('CONNECTED');
});

// Listen to an event called 'rand' from the server
socket.on('rand', function (num) {
    console.log('RANDOM: ' + num);
});

setInterval(() => {
  socket.emit('sampleClientEvent', 'blabla');
}, 2000);

