const express = require("express");
const users = require("./MOCK_DATA.json"); // Importing the user JSON Data for Performing Tasks

const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/routes")
const {logReqRes} = require("./middlewares/middleware")

const { type } = require("os");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/FirstDb").then( () =>console.log("MongoDB connected"));


app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

// It says it any requrst comes in user then it goes to user.js
app.use("/api/users",userRouter)

app.listen(PORT, () => console.log(`Server is stated at PORT ${PORT}`));
