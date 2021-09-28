//reference node's built-in http library to run a local web server

let http = require('http');



//use the http library to start a web server and listen for http request events
http.createServer((req,res)=>{
    //write HTTP headers with a 200 0K status code
    res.writeHead(200,{'Content-type':'text-plain'})
    res.write('Hello World')
    res.end()
}).listen(3000)