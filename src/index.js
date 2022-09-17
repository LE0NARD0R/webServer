const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

//initialization
const app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes/routes'));

app.listen(8000, () => {
    console.log('Server on port 8000');
});