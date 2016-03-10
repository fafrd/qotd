var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 17;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'hellllooooooooo'})
});

app.use('/api', router);

app.listen(port);
console.log('starting qotd service on port ' + port);
