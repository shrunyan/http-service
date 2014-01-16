# HTTP: Status and Verb Service

This service is intended to be running for testing other services against. I.E. external services that expect a specific HTTP response.

This app can be used to test all HTTP 1.1 [Verbs](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) and [Status codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

_Running on port `3001` so it doesn't interfer with expressjs default port assignment_

## How To Use

1. Check out and install dependencies
	
	`$ git clone https://github.com/shrunyan/http-service.git`
	
	`$ cd http-service`
	
	`$ npm install`

2. Start the server

	`$ node app.js`

3. Make a request

	`$ curl -X GET http://127.0.0.1:3001/200`

4. Sit back and test.
