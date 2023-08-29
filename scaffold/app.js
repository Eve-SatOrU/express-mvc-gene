// your main app
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));


const routes = require('./routes/routes');
app.use('/', routes);

const controller = require('./controllers/controller');


  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });