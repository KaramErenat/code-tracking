const http = require('http');
const { parse } = require('path');


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
            
        }else if(req.url == '/add' && req.method == 'POST'){
            // recieve data from the client
            req.on('data', (chunk)=>{
               // console.log("data recieved");
               // console.log(chunk); // binary data that should be parsed
                const parsedData = JSON.parse(chunk)
                //console.log(parsedData);

                // in this scope we only parse the data and we get out
                
            })

            // push the data to the array


            // response to the client


            res.write(JSON.stringify(users))
            res.end()

        }else{
            console.log("error 404");
            
        }
    }
).listen(3000, ()=>console.log("Server is working"));

