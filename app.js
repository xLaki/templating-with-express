const express = require('express');
const app = express();

app.get('/', function(request, response){
    console.log('bruh moment');
    response.send('bruhh');
});

app.listen(3000);
console.log('Server is live, and so is your fat ugly body.');