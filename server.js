//khai bao moudule http
var http = require('http');
// Khai bao module fs
var fs = require('fs');
// Tao server chay cong 8000
http.createServer(function (req, res) {
    //Din danh response header tra ve
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write co the viet codee
    res.write('<html>');
    res.write('<head>');
    res.write('<title> day la trang chu </title>');
    res.write('</head>');
    res.write('<body><h1>day la h1</h1></body>');
    // vd ve parameter url cua request
    var url_param = req.url;
    res.write(url_param);
    res.write('</html>');
    // doc file index.html encode utf8
    fs.readFile('index.html', 'utf8', function(err,data){
        if (err) throw err;
        res.write(data);
        res.write(url_param);
        // dat res.end o dau thi ct chay o do 
        res.end();
    });
    
}).listen(8000);

// console.log(fs)
