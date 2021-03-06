var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server).listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running ...');

//Routes
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Conencted: %s sockets connected', connections.length);

	//Disconnect
	socket.on('disconnect', function(data){
		connections.splice(conections.indexOf(socket), 1);
		console.log('Disconected %s sockets connected', connections.length);
	});
	

});
