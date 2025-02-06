# ngrok API service

This project contains a very simple NodeJS-based API service that returns
information about the connection on all paths. The intended usage is to demo
ngrok's API gateway functionality.

A (prettified) example response:

```json
{
  "message": "Pong from ngrok!",
  "host": "localhost:4000",
  "req_headers": {
    "host": "localhost:4000",
    "user-agent": "curl/8.7.1",
    "accept": "*/*"
  },
  "method": "GET",
  "url": "/",
  "time": "2025-02-06T21:23:28.084Z",
  "status": 200
}
```

You can configure the app using environment variables to change its listening
port from the default `4000` or to alter the default messsage.

Change the listening port:

```shell
PORT=4001 node app.js
```

You can change the port to run multiple instances of the service on a single
system.

Change the message:

```shell
MESSAGE='Hello from cloud A!' node app.js
```

Changing the message is useful in certain demo situations, like showcasing
multicloud load balancing with endpoint pools. Set one replica with
`MESSAGE='Hello from cloud A!'` and another with `MESSAGE='Hello
from cloud B!'` to see ngrok load-balance between the two services.

## Use with Docker

This project also has a [Docker
container](https://hub.docker.com/repository/docker/joelatngrok/api-demo/general)
availble via DockerHub.

```shell
# Default usage
docker run -p 4000:4000 -e -d joelatngrok/api-demo

# Change the port
docker run -p 4000:4000 -e PORT=4001 -d joelatngrok/api-demo

# Change the message
docker run -p 4000:4000 -e MESSAGE='Custom message goes here!' -d joelatngrok/api-demo
```

## Build the container yourself

To build and push this app to a different registry:

```shell
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t <YOUR_REGISTRY_USERNAME>/api-demo:latest \
  --push .
```
