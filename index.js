const { createServer } = require('node:http');
const port = 5000;
const server = createServer((req, res) => {
    const url=req.url;
    if(url==="/"){
        res.end('Hello World');
    }
    else if(url==="/home"){
        res.end("WElcome To HOme");
    }
    else if(url==="/home/page/page1"){
        res.end("page1 path created");
    }
    });
server.listen(5000,()=>{
    console.log('Server running at');
});