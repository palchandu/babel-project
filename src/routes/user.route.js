//var express=require('express');
import express from 'express';
import 'dotenv/config';
var route=express.Router();

route.get('/',(req,res)=>{
    res.json({message:"Welcome to express js","data":process.env.MY_SECRET});
})

module.exports=route