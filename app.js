var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.all('/*', function (req, res) {
  res.status(200).json({ 
    message: "Pong from ngrok!",
    host: req.headers.host,
    client_ip: req.headers['x-forwarded-for'],
    method: req.method,
    url: req.url,
    time: new Date().toISOString(),
    status: res.statusCode,
  });
})

app.listen(port, function () {
  console.log(`Example app listening at ${port}`)
})
