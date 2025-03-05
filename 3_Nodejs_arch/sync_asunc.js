const fs = require("fs");

// Sync

console.log("1");

// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

fs.readFile("./test.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err);
    } else {
        console.log(result);
    }
});

console.log("2"); 0


// fs.readFileSync("./test.txt", "utf-8",(error,result)=>{
//     console.log(result);
    
// })
