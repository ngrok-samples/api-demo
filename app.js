var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
const message = process.env.MESSAGE;

app.all('/*', function (req, res) {
  if (message) {
    res.status(200).json({ 
      message: message,
    });
  } else {
    res.status(200).json({ 
      message: "Pong from ngrok!",
      user_agent: req.headers['user-agent'],
      method: req.method,
      url: req.url,
      time: new Date().toISOString(),
      status: res.statusCode,
    });
  }
})

app.listen(port, function () {
  console.log(`Example app listening at ${port}`)
})
