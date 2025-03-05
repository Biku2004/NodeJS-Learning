const { log } = require("console");
const fs = require("fs");

// Syncronous file handling
// fs.writeFileSync("test.txt","Hello world");

// Asyncronous file handling
// fs.writeFile("test.txt","Hello world 1", () => {});

// The Above code will create a file called test.txt and write Hello world in it, if this function overwrites the content of the file with Hello world.
// But we want to keep the old content and append the new content to it.
//  we will use appendFile method to append the content to the file.

// fs.appendFileSync("test.txt", "Hello world 2\n", () => {});
// fs.appendFileSync("test.txt", new Date().getDate().toLocaleString());
// Used for storing server logs, appending data to the file.
// Storing ip address and data the user is interacting with.


// fs.appendFileSync("test.txt", `${Date.now()} Hey There\n`); // We can also data Time Here
// now(): number  =>Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).


// ------------------- Reading a file -------------------


// How to read a file
// Asyncronously 
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// Syncronously
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });


// -------------------

// copy file
// fs.copyFileSync("./test.txt","./copy.txt");

// delete file
// fs.unlinkSync("./copy.txt");

// finding stats of a file
const stats = fs.statSync("./test.txt");
// console.log(stats);

/* // This is the output of stats of a file : 
Stats {
  dev: 3034365703,     
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,       
  ino: 562949954407830,
  size: 240,
  blocks: 0,
  atimeMs: 1737894628732.489,
  mtimeMs: 1737887704147.428,
  ctimeMs: 1737887704147.428,
  birthtimeMs: 1737879448261.8716,
  atime: 2025-01-26T12:30:28.732Z,
  mtime: 2025-01-26T10:35:04.147Z,
  ctime: 2025-01-26T10:35:04.147Z,
  birthtime: 2025-01-26T08:17:28.262Z
}

*/

// Create a directory using fs module
// fs.mkdirSync("Directory");
fs.mkdirSync("MultupleDirectories/Dir1/Dir2", { recursive: true });
