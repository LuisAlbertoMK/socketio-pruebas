
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


const whiteList=['https://speed-pro-desarrollo.web.app','http://localhost:4200','https://apputos.app'];

// Configuración de CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requests sin origin (como Postman)
    if (!origin) {
      return callback(null, true);
    }
    
    if (whiteList.includes(origin)) {
      callback(null, origin);  // Retornamos el origen específico, no todos
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization'
  ],
  credentials: true
};
// Aplicar CORS
app.use(cors(corsOptions));

// Manejador de errores de CORS
app.use((err, req, res, next) => {
  if (err.message === 'No permitido por CORS') {
    res.status(403).json({
      error: true,
      message: 'Origen no permitido',
      origin: req.headers.origin
    });
  } else {
    next(err);
  }
});

server.listen(app.get('port'), () => {
    console.log('Servidor ejecutándose en http://localhost: ',app.get('port'));
  });

