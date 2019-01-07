const express = require('express');

// set up express app
const app = express();

app.get('/api', function(req, res){
  res.send({ name: 'Beanie' });
});

// listen for requests
app.listen(process.env.PORT.process.env.IP,function(){
    console.log('now listening for requests');
});
