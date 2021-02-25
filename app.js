const express=require("express");
const server=express();
const mongoose=require("mongoose")
const appRouter=require('./Routers/appRouters');
const bodyparser=require('body-parser');

mongoose.connect('mongodb://localhost/Mathlab',{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false,
useCreateIndex:true,
}).then ((res)=>{
  console.log('connected to database')
});

server.use(appRouter);

server.use(express.urlencoded({extended:true}));

server.set("view engine" ,"ejs");

server.use(express.static('./public'))



const port=500
server.listen(port,(err)=>{
    if(err){
      console.log("error")
    }else{
        console.log("server listening to port:500")
    }
})


