 const express = require('express');

 const app = express();

app.get('/', (req, res) => res.send('Hello World from Express!'))

app.listen(8050);
console.log('Server on port 8050')