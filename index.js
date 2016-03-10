var express = require('express');
var child_process = require('child_process');
var app = express();
var port = 17;
var router = express.Router();

//var fortune = ;

router.get('/', function(req, res) {
	res.send(child_process.execSync('/usr/games/fortune').toString('ascii'))
});

app.use('/', router);

app.listen(port);
console.log('starting qotd service on port ' + port);
