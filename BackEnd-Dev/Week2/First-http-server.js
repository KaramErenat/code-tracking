const http = require('http');
const { parse } = require('path');


// Array
const users = [
    {name: "Ahmed", age: 25, id: 1},
    {name: "Ali", age: 30, id: 2},
    {name: "Omar", age: 35, id: 3},
    {name: "Sara", age: 20, id: 4},
    {name: "Sama", age: 22, id: 5},
    {name: "Samer", age: 27, id: 6}
]


// ADD to a file
const fs = require('fs')
// fs.writeFileSync('./users.json', JSON.stringify(users))

http.createServer(
    (req,res)=>{
        if(req.url == '/' && req.method == 'GET'){
            res.write(JSON.stringify(users))
            res.end()
            
        }else if(req.url == '/add' && req.method == 'POST'){

            // recieve data from the client
            let parsedData = ''
            req.on('data', (chunk)=>{
               // console.log("data recieved");
               // console.log(chunk); // binary data that should be parsed
                 parsedData = JSON.parse(chunk)
                //console.log(parsedData);

                // in this scope we only parse the data and we get out
                
            })

                req.on('end', ()=>{
                    // before you push the data to the array, u should check if the data is valid or not
                    // is this case we'll check if the id is already exist or not
                    const isIdExist = users.find(user=> user.id === parsedData.id)
                    if(isIdExist){
                        res.write("This id is already exist")
                        res.end()
                        return
                    }
                    // push the data to the array
                    users.push(parsedData)

                    // response to the client
                    res.write(JSON.stringify(users))
                    res.end()
                })

                // we use end after the on('data') because we need to wait until the data is received

        }else if(req.url == '/readFromFile' && req.method == 'GET'){
            fs.readFile('./users.json', 'utf8', (err, data)=>{
                if(err){
                    console.log(err);
                    return
                }
                res.end(JSON.stringify(JSON.parse(data)))
            })
        }else if(req.url == '/addToFile' && req.method == 'POST'){

            let parsedData = ''
            req.on('data', (chunk)=>{
                parsedData = JSON.parse(chunk)
            })

            

            req.on('end', ()=>{
                // read the file to check the latest version of the data
                const users = JSON.parse(fs.readFileSync('./users.json', 'utf8'))
                // check if the id is already exist or not
                const isIdExist = users.find(user=> user.id === parsedData.id)
            if(isIdExist){
                res.write("This id is already exist")
                res.end()
                return
            }
            // push the data to the array
            users.push(parsedData)
            // write the data to the file
            fs.writeFileSync('./users.json', JSON.stringify(users))
            res.write("Added successfully")
            res.end()
            })



        }else{
            console.log("error 404");
            
        }
    }
).listen(3000, ()=>console.log("Server is working"));

