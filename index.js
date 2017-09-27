/* Requirements */
const Bandwidth  = require('node-bandwidth');
const axios = require('axios');
const express    = require('express');
const bodyParser = require('body-parser');
let app          = express();
const http       = require('http').Server(app);

/* Config variables */
const {creds} = require('./config.js');

/* new SDK */
const bandwidth = new Bandwidth(creds);

const buildToArray = function (message) {
    let numbers = {
        from: message.to
    }
    let toNumbers = message.message.to;
    let index = toNumbers.indexOf(message.to);
    if (index > -1 ) {
        toNumbers.splice(index, 1);
    }
    toNumbers.push(message.message.from);
    numbers.to = toNumbers;
    return numbers;
}

const replyToMessage = async message => {
    const picture = 'https://s3.amazonaws.com/bwdemos/cute_dog.jpg';
    const {to, from} = buildToArray(message);
    const messageContents = {
        to    : to,
        from  : from,
        text  : 'Thanks for testing Group Messaging 😀. Here is a cute dog 🐶',
        media : [picture]
    };
    console.log(messageContents);
    const newMessage = await bandwidth.Message.sendGroup(messageContents);
    return newMessage;
}

/* Paths */
const MESSAGE = '/messages';

/* Event Handlers */
const handleMessage = async (req, res) => {
    console.log(req.body);
    /* Async doesn't need to reply here */
    res.sendStatus(200);
    const message = req.body[0];
    if (message.message.direction === 'in'){
        try {
            await replyToMessage(message);
        }
        catch (e) {
            console.log(e);
        }
    }
    else if (message.message.direction === 'out') {
        console.log('Outbound Status Received!');
    }
    else {
        console.log('Unknown direction 😩');
    }
};

/* Express Setup */
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {res.send("Hello World")})
app.post(MESSAGE, handleMessage);

/* Launch the Server */
http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});