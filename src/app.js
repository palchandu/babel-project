//var express=require('express');
import express from 'express';
var app=express();
//var bodyparser=require('body-parser');
import bodyparser from 'body-parser';
/*Import Routes */
//var user=require('./routes/user.route');
import 'dotenv/config';
import user from './routes/user.route'

app.use(bodyparser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyparser.json({limit: '50mb',extended: true}));


/*test routes */
// app.use('/',function(req,res){
//     console.log("Hello World!");
// })
/*Use Routes */
app.use('/',user);

var port=4546;
app.listen(port,()=>{
    console.log('Application is running on port '+port);
});
module.exports=app;
