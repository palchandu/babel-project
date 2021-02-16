import express from 'express';
var app=express();
import bodyparser from 'body-parser';
import 'dotenv/config';
/*Import Routes */
import user from './routes/user.route'

app.use(bodyparser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyparser.json({limit: '50mb',extended: true}));

/*Use Routes */
app.use('/',user);

var port=4546;
app.listen(port,()=>{
    console.log('Application is running on port '+port);
});
module.exports=app;
