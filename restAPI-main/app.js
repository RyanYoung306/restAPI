
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config'); //hides DB password, don't upload to git

const routes = require('./routes/routes');



//this is called middle wares
app.use(cors()); //allows cors access
app.use(express.static('public')); // allows access to public folder
app.use(bodyParser.json()); //converts information to be read
app.use(routes); //uses routes folder 

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
