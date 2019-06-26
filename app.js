const express = require('express');
const app = express();

// adding middleware
// setting up template engine
app.set("view engine", "ejs");

app.get('/', function(req, res){
    console.log('bruh moment');
    res.render('home');
});

app.listen(3000, function(err){
    if (err){
        console.log(err);
    };
    console.log('Server is live, and so is your fat ugly body.')
});