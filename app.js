const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello World!</h1>');
});

server.listen(3000,() => {
    console.log('Server is running on http://yourip:3000');
});