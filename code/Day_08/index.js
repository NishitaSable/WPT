// var http = require("http");
// console.log(http)
// http.createServer(function(request,response){
//     console.log(response)
//     console.log("\n.......")
//     console.log(request)
//     response.writeHead(200,{"content-type":"text/plain"})
//     response.end('Hello World\n')

// }).listen(8081)
// console.log('server running......')




// const http = require('http')
// const hostman = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/plain')
//     res.end('Hello')
// });

// server.listen(port,hostman,()=>{
//     console.log(`server running.......//${hostman}:${port}`)
// });




// var http = require("http");
// var dt = require("./server.js");
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     response.write("The date and time are currently: " + dt.myDateTime());
//     response.end();
//   })
//   .listen(8080);
// console.log("Server running on port 8080");



// var http = require('http')
// http.createServer(function(request,response){
//     response.writeHead(200,{"content-type":'text/html'})
//     response.write(request.url)
//     response.end()
// }).listen(5500)



// var http = require('http')
// var url = require('url')

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/html'})
//     var q = url.parse(request.url,true).query
//     var txt = q.year+ "  "+ q.month
//     response.end(txt)
// }).listen(5001)




// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = new URL(adr);
// console.log(q);
// console.log(q.pathname); 
// console.log(q.search); 
// var qdata = q.searchParams; 
// console.log(qdata);
// console.log(qdata.get('month')); 
// console.log(qdata.get('year'))



// var fs = require("fs")
// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log("Program Ended")



// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("Program Ended");



