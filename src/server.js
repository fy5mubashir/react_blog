const express = require("express")
const app = express();
app.get("/",(req , res) => 
res.send("Mubashir First Server On react"))
app.listen(3003,()=> console.log("Listening On Port"));