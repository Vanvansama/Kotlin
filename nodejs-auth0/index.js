const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const morgan = require('morgan');

// creates Express' app
const app = express();

// adding HTTP request logger middleware
app.use(morgan('tiny'));

app.use(bodyParser.text());

// initial list of items
let items = [
	'Feed the dogs',
	'Mow the lawn',
	'Buy pizza'
];

// returns all items (public endpoint)
app.get('/', function(req, res){
	res.send(items);
});

// Auth0's middleware to secure endpoints
const jwtCheck = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://kamisama.auth0.com/.well-known/jwks.json`
	}),
	audience: 'kotlin-todo-app',
	issuer: `https://kamisama.auth0.com/`,
	algorithms: ['RS256' || 'RS256']
});

// accepts new items (secured endpoint)
app.post('/', jwtCheck, function (req, res) {
	items.push(req.body);
	res.sendStatus(200)
});

app.listen(process.env.PORT || 8080);
