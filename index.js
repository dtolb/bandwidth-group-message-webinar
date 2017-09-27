/* Requirements */
const Bandwidth  = require('node-bandwidth');
const express    = require('express');
const bodyParser = require('body-parser');
let app          = express();
const http       = require('http').Server(app);

/* Config variables */
const {creds} = require('./config.js');

/* new SDK */
const bw = new Bandwidth(creds);

/* Paths */
const MESSAGE = '/messages';

/* Event Handlers */
const handleMessage = (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
};

const handleStatusUpdates = (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
}


/* Express Setup */
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {res.send("Hello World")})
app.get(MESSAGE, handleMessage);

/* Launch the Server */
http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});