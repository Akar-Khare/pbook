const express = require('express');
const cors =require('cors');

const port = 5000;
const app = express();


app.use(cors({
  credentials:false,
  origin : "*",
}))

app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})