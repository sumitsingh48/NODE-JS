const http = require('node:http');
const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain');
    //res.write("<h1>this is my  main home  page </h1>")
    if(req.url === '/'){
            res.setHeader('Content-Type', 'text/htlm');

        res.write("<h1>this is my  main home  page </h1>")
    }else if(req.url === '/about_us'){
        res.write("this is about us page ")
    }else if(req.url === '/contact'){
        res.setHeader('content-type','text/plain');
        res.write("this is contact my us page ")
    }else{
        res.write("404 page not found ")        
    }
    res.end();
    // setheader ('content-type','application/json')
    //res.write({
    // id:1
    //})
    //JSON 
    //json store the value in key value
    //eg: {
    //id:1;
    //name:"GLA University"
    //}
});
server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});