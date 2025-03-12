const express = require("express");
const urlRoute = require("./routes/url-routes")
const {connectToMonogDb} = require("./connect")
const URL = require("./models/url-model")

const app = express();
const PORT = 8001;

connectToMonogDb("mongodb://localhost:27017/url-shortner")
    .then( ()=> console.log("MongoDb connected"));

app.use(express.json())
app.use("/url",urlRoute)

app.use("/:shortId", async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push : {
        visitHistory : {
            timeStamp : Date.now()
        },
    }});

    res.redirect(entry.redirectURL);
})

app.listen(PORT , () => console.log(`Server started at port : ${PORT}`));


