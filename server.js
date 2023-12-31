const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


app.listen(1337, () => {
    console.log('Listening at Port 1337');
});