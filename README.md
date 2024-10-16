# ngrok API service

This project contains a very simple API service that returns information about the
connection on all paths. Its intended usage is to demo ngrok's API gateway
functionality.

Example response:

```
{"message":"Pong from ngrok!","host":"api-g-tester.joelhans.xyz","client_ip":"174.73.243.140","method":"GET","url":"/","time":"2024-10-16T13:17:07.546Z","status":200}
```

