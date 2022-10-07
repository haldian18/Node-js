const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello woorld!, I'm Haldian");
    res.end();

}).listen(8000);

console.log('server running on port 8000');          



var num1 = 5;
var num2 = 10;
var  hasil = 5 +10;
console.log('Ini merupakan Penjumlahan dari 5 + 10 = ' + hasil);