
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')
const createSocketServer = require('./socket');
const app = express()
const server = createSocketServer();
// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//configuracion
app.set('port', config.app.port)
const whiteList=["https://speed-pro-desarrollo.web.app", "http://localhost:4200"];
app.use(cors({origin: whiteList}));

server.listen(app.get('port'), () => {
    console.log('Servidor ejecutándose en http://localhost: ',app.get('port'));
  });

