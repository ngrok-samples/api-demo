var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
const message = process.env.MESSAGE || 'Pong from ngrok!';

app.all('/*', function (req, res) {
  res.status(200).json({ 
    message: message,
    host: req.headers.host,
    req_headers: req.headers,
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
