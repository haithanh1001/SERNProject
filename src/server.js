import express from 'express';
import bodyParser from 'body-parser';
import initWebRoute from './route/web';
import configViewEngine from './config/viewEngine';
require('dotenv').config();

const app = express ();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

configViewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`App is listenning on port ${port}`);
})