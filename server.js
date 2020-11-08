'use strict';

const { response } = require('express');
//Third party dependency.  Pulling it in to use it
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// allows express to serve "static files" (imgs, text...)
app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('Server up on Port 3000'); //Use over 1000 (most use 3000<= arbitrary standard)
});