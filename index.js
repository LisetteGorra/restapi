const express = require('express');
const routes = require('./routes/api');

// set up express app
const app = express();

app.use(routes);

// listen for requests
app.listen(process.env.PORT, process.env.IP,function(){
    console.log('now listening for requests');
});