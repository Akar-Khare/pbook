const express = require('express');
const cors =require('cors');

const port = 5000;
const app = express();


app.use(cors({

 " Access-Control-Allow-Origin":'http://localhost:3000/',

  "Access-Control-Allow-Credentials": true,
  
  "Access-Control-Allow-Methods": 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  
  "Access-Control-Allow-Headers": 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})