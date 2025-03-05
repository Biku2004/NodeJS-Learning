const http = require('http');
const fs = require('fs');
const url = require("url") // 26. This is for parsing the url

// 5. Before Adding listner : const myServer = http.createServer();
//const myServer = http.createServer(); // 1. This will create a web-server for us 

// 2. Who will handel the web server , that kis particular request ke liye kya  hona chahiye
// 3.For that we need a handler function which process the incoming request

// 4. Ye createServer ek request Listner ko leta hai , ye ek callback function leta ha jo meri incoming request ko process kar sake

//6. After adding listner : const myServer = http.createServer(()=>{});
// const myServer = http.createServer(()=>{});

// 7.This arrow function is responsible for handling/processing the incoming request

// 8.Par mujhe pata kaise chalega ki kon request kar rah ha aur kya response send karna hai ? 

// 9.For that , the call back function has 2 arguments : req(request) and res(response)

/*
    10.Jab bhi koi incoming request ati ha hamare server ke upar
    toh yeh mera is callback function ko run karega
    for first argument : reg : isme ye ek object dalege jisme request ki sare information hogi

*/

const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end(); // 25. This is for ignoring the favicon.ico request
    const log = `${Date.now()} : ${req.method},${req.url} New Request Recieved\n`;

    const myUrl = url.parse(req.url,true); // 27. This will parse the url and give us the object , true is for parsing the query parameters
    // console.log(myUrl);
    


    fs.appendFile("log.txt",log,(err,data)=>{

        // 24. we can perform operations on the url
        switch(myUrl.pathname){
            // 28. "req.url" is chnage to "myUrl.pathname"
            // 29. By doing this even if the query string arguments are not truly present then also it will switch to the correct case/page or to the paths that we have defined
            case "/" : 
                if(req.method === "GET") res.end("Home Page");
                break;

            case '/about' : 
                const username = myUrl.query.myname;
                res.end(`Hi , ${username}`);
                // res.end("About Page");
            break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end(`You Searched for `+search);
                break;


            case "/signup" :
                if(req.method === "GET") res.end("This is a signup page");
                else if(req.method === "POST"){
                    // DB Query
                    res.end("User Registered Successfully");
                }

            default : 
                res.end("404 Page Not Found");
        }

        // res.end("Hello From Server Again");
    });


    // 20. Now what is inside the req 
    // console.log(req);
    

    // 12.This happens when a request comes to the server
    console.log("New Request Recieved");
    // res.end("Hello World"); // 11. This will send the response to the client for request on my webserver
});

/*
    13.Explanation of the above code is that when a request comes to the server
    then the callback function will run and it will print the message "New Request Recieved"
    and then it will send the response "Hello World" to the client
*/

// 14.But for running this server we need a port number
//  15.woh port number ke upar ham is server ko listen karwayenge for the incoming request

myServer.listen(8000,()=> console.log("Server Started!")); 
// 16. This is for running the server on this number/port number
// 17. Also that one server can run on one port number at a time only and we cannot run multiple servers on the same port number
// 18.s we also have to give call back function to listen method ,  but is it necessary to give call back function to listen method ?
// 19. No , it is not necessary to give call back function to listen method , it is optional


// 20.Any changes made in the server code will only be reflected when we restart the server
// 21.For that we have to stop the server and then run the server again

// 22.Now we will try to remeber the data that we have sent to the server
// 23.using the fs module we will try to store the data in the file system


