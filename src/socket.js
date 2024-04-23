const http = require('http');
const socketIO = require('socket.io');

const createSocketServer = (app) => {
  const server = http.createServer(app);
  const io = socketIO(server, {
    cors: {
      origin: ['http://localhost:4201','https://proyectopruebas-5bfd4.web.app'],
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('cliente', (data) => {
      //manejo de informacion de cliente emicion y recepcion
      io.emit('cliente', data);
    });
    socket.on('vehiculo', (data) => {
      //manejo de informacion de vehiculo emicion y recepcion
      io.emit('vehiculo', data);
    });
    socket.on('tecnico', (data) => {
      //manejo de informacion de tecnico emicion y recepcion
      io.emit('tecnico', data);
    });
    socket.on('morefaccion', (data) => {
      //manejo de informacion de morefaccion emicion y recepcion
      io.emit('morefaccion', data);
    });
    socket.on('taller', (data) => {
      //manejo de informacion de taller emicion y recepcion
      io.emit('taller', data);
    });
    socket.on('sucursal', (data) => {
      //manejo de informacion de sucursal emicion y recepcion
      io.emit('sucursal', data);
    });
    socket.on('OrdenServicio', (data) => {
      //manejo de informacion de OrdenServicio emicion y recepcion
      io.emit('OrdenServicio', data);
    });


    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
  });

  return server;
};

module.exports = createSocketServer;