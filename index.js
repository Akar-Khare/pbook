const express = require('express');
const cors =require('cors');

const port = 5000;
const app = express();


app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", " http://192.168.29.111:3000");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})