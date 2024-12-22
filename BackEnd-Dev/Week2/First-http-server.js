const http = require('http')


// Array
const users = [
    {name: "Ahmed", age: 25},
    {name: "Ali", age: 30},
    {name: "Omar", age: 35},
    {name: "Sara", age: 20},
    {name: "Sama", age: 22}
]



http.createServer(
    (req,res)=>{
        if(req.url == '/' && req.method == 'GET'){
            res.write(JSON.stringify(users))
            res.end()
            
        }else{
            console.log("error 404");
            
        }
    }
).listen(3000, ()=>console.log("Server is working"));

