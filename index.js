const express = require('express');
const cors =require('cors');

const port = 5000;
const app = express();

app.use(cors({
  origin: ['https://pictbook69.netlify.app','https://pictbook.onrender.com'],
  credentials: true,
  
  allowedHeaders:'content-type',
  
  
  }));

// app.use(function(req, res, next) {
//   res.header( )
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//   res.header("Access-Control-Allow-Headers", '*');
//   next(); 
// });

app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})