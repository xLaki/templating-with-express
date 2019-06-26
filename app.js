const express = require('express');
const app = express();

app.get('/', function(req, res){
    console.log('bruh moment');
    res.send('bruhh');
});

app.listen(3000, function(err){
    if (err){
        console.log(err);
    };
});