const http=require("http")

const server=http.createServer((req,res)=>{
    // console.log(req);
       
    if(req.url==="/"){
        res.end("welcome to my home")
    }
    else if(req.url==="/about"){
        res.end(`
        <h1>Welcome to home page</h1>`)
    }else{

        res.end(`
        <h1>Oops, page not found</h1>
        <a href="/">Back Home</a>`)
    }
})

server.listen(5000)