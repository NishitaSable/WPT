// var events = require('events')

// var eventEmitter = new events.EventEmitter()
// var connectHandler = function connected(){
//     console.log('connection successful')

//     eventEmitter.emit('data_received')
// }
// eventEmitter.on('connection',connectHandler)
// eventEmitter.on('data_received',function(){
//     console.log('data received')
// })
// eventEmitter.emit('connection')
// console.log("Program ended")

//array of function pointer

// var events = require('events')
// var eventEmitter = new events.EventEmitter()

// var listner1 = function listner1(){
//     console.log('listner1 executed')
// }

// var listner2 = function listner2(){
//     console.log('listner2 executed')
// }

// //addListener and on both of them have same functionality
// eventEmitter.addListener('connections',listner1)
// eventEmitter.on('connection',listner2)
// console.log(eventEmitter.listeners('connection'))

// eventEmitter.emit('connection')
// eventEmitter.removeListener('connection',listner1)
// console.log("listner1 will not listen now")

// eventEmitter.emit('connection')
// console.log("Program Ended")

// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var listner1 = function listner1(n) {
//     console.log('listner1 executed ' + n + n);
// };

// var listner2 = function listner2(n) {
//     console.log('listner2 executed ' + n * n);
// };

// // addListener() and on() have the same functionality

// eventEmitter.addListener('connection', listner1);

// eventEmitter.on('connection', listner2);

// // Fire the connection event
// eventEmitter.emit('connection', 5);

// console.log(eventEmitter.listeners('connection'));

// // Remove the binding of listener1
// eventEmitter.removeListener('connection', listner1);

// console.log("Listener1 will not listen now.");

// // Fire the connection event
// eventEmitter.emit('connection', 7);

// // console.log("Program Ended.")

// const http = require('http');

// const server = http.createServer((req, res) => {

//     // This is triggered by the "request" event
//     console.log('Request event fired!');

//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('Hello World\n');
// });

// // Fired when a new TCP connection is made
// server.on('connection', (socket) => {
//     console.log('Connection event fired!');
// });

// // Fired when the server closes
// server.on('close', () => {
//     console.log('Server closed.');
// });

// // Start listening
// server.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });





var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){

    var q = new URL(req.url,`http://${req.headers.host}`)
    var filename = "." + q.pathname

     if (q.pathname == "/") {
        filename = "./index.html";
    }

    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'})
            return res.end("404 not found")
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end()
    })
}).listen(8080)
console.log("server started")