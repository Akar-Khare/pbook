const express = require('express');


const port = 5000;
const app = express();



app.use(function(req, res, next) {
  res.header("Content-Type","application/json" );
 
  next(); 
});

app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})