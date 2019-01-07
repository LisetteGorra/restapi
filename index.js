const express = require('express');

// set up express app
const app = express();

<<<<<<< HEAD
=======
app.get('/api', function(req, res){
  res.send({ name: 'Beanie' });
});

>>>>>>> version5.0
// listen for requests
app.listen(process.env.PORT.process.env.IP,function(){
    console.log('now listening for requests');
});