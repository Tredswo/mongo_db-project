const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app =express();
const userRoutes = require("./routes/userRoutes");
const bookRoutesoutes = require("./routes/bookRoutes");
const orderRoutes = require("./routes/userRoutes");
const { default: mongoose } = require("mongoose");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

const dbUri= "mongodb://localhost:27017/online-bookstore";
mongoose
     .connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
     .then(()=>console.log("MongoDB Connected"))
     .catch((err)=>console.log(err));
app.use("/api/users",userRoutes);
app.use("/api/books",bookRoutesoutes);
app.use("/api/orders",orderRoutes);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","signup.html"));
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"));
});
const port=3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
