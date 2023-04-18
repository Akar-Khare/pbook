const express = require('express');


const port = 5000;
const app = express();
const router = express.Router();



app.use(require('../router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(`/.netlify/functions/api`, router);



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})