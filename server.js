//update ngay 13/06
//khai bao moudule http
var http = require('http');
// Khai bao module fs
var fs = require('fs');
// Tao server chay cong 8000
var url = require('url');
http.createServer(function (req, res) {
    var parse = url.parse(req.url, true);
    var path = parse.path
    if(path === '/'){
        fs.readFile('files/home.html', function (err, data){
            res.writeHead('200', {'Content-Type': 'text/html'});
            res.end(data);
        })
    }else {
        var load = 'files' + path + '.html'
        fs.readFile(load, function (err, data){
            if(err) {
                res.writeHead('404', {'Content-Type': 'text/html'});
                res.write('<html>');
                res.write('<head>');
                res.write('<title> day la trang chu </title>');
                res.write('</head>');
                res.write('<body><h1>404 not found web nay in line 25</h1></body>');
                // vd ve parameter url cua request
                var url_param = req.url;
                res.write(url_param);
                res.write('</html>');
                res.end();
            } else {
                res.writeHead('200', {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    }


    //Din danh response header tra ve
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write co the viet codee
    // res.write('<html>');
    //     res.write('<head>');
    // res.write('<title> day la trang chu </title>');
    //  res.write('</head>');
    // res.write('<body><h1>day la h1</h1></body>');
    // vd ve parameter url cua request
    // var url_param = req.url;
    // res.write(url_param);
    // res.write('</html>');
    // doc file index.html encode utf8
    // fs.readFile('index.html', 'utf8', function(err,data){
    //     if (err) throw err;
    //     res.write(data);
    //     res.write(url_param);
    //     // dat res.end o dau thi ct chay o do 
    //     res.end();
    // });
    
    // ghi file
    var i = 1;
    var content = 'noi dung muon ghi ';
    fs.writeFile('writer.html', content, 'utf-8', function(err){
        //Kiem tra neu co loi thi xuat ra loi
        if(err)
            throw err;
        else {
            console.log('Ghi file thanh cong lan: ' + i);
            i = i + 1
        }
            
    });
// ----------------------
    //module url
    // var url = require('url');
    var website_cgether = 'http://pos.cgether.vn/web#cids=1&menu_id=258&action=408&model=stock.quant&view_type=list'
    //parse chuoi sang url
    var parse_cgether = url.parse(website_cgether, true);
    //hien thi host
    console.log('auth: ' + parse_cgether.auth);
    console.log('hash: ' + parse_cgether.hash);
    console.log('host: ' + parse_cgether.host);
    console.log('hostname: ' + parse_cgether.hostname);
    console.log('href: ' + parse_cgether.href);
    console.log('path: ' + parse_cgether.path);
    console.log('pathname: ' + parse_cgether.pathname);
    console.log('port: ' + parse_cgether.port);
    console.log('protocal: ' + parse_cgether.protocol);
    console.log('query: ' + parse_cgether.query.a);
    console.log('search: ' + parse_cgether.search);
    console.log('slashes: ' + parse_cgether.slashes);
// *******************************************
}).listen(8000);

// console.log(fs)
