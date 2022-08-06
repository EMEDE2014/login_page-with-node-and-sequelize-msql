const express = require('express');
const app = express();
//Connect to DB
const ConnectionDb = require('./src/models/ConnectionDb');
ConnectionDb.authenticate()
.then(() => {
    console.log('DATABASE CONNECTED');
})
.catch((e) => console.log(e));
// SESSION 
const session = require('express-session');
app.use(session({
    secret: 'fjdsjfhjds432413',
    cookie:{
        maxAge: 1000 * 24 * 60 * 60 * 247,
        httpOnly:true
    }
}));
const flash = require('connect-flash');

const router = require('./router');
// EXPRESS PARSER
app.use(express.urlencoded({extended: false}));
//Define Middlewares
const {middlewareGlobal} = require('./src/middlewares/middlewareGlobal');


// FIND FILES 
const path = require('path');
// CONFIG FILES STATICS
app.use(express.static(path.resolve(__dirname, 'public')));
// SET ENGINE
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



// USE FLASH
app.use(flash());

//USE Middlewares
app.use(middlewareGlobal);

// USE ROUTES
app.use(router);

app.listen(5555, () => {
    console.log('http://localhost:5555');
    console.log('Port its listening');
});

