const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
const port = 8000;

const db = require('./config/mongoose');

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);

});