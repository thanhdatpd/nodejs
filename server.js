var http = require('http');
const express = require('express')
const apiRoute = require('./routes/api')

let port = 8080;
app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/v1', apiRoute)
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);






function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}