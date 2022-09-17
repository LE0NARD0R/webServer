const express = require('express');
const engine = require('ejs-mate');

//initialization
const app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/Views', (req, res) => {
    res.render('index');
});

app.listen(8000, () => {
    console.log('Server on port 8000');
});