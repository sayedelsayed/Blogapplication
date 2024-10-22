const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userRouter=require("./api/user.api");
const newsRouter=require("./api/news.api");

mongoose.connect("mongodb://localhost:27017/newsApp")
.then(()=>console.log("data base connected"))
.catch((err)=>console.error(err));
app.use(express.json());
app.use("/user",userRouter);
app.use("/news",newsRouter)


app.listen(3000,()=>console.log("server is here "))