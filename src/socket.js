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
      // console.log(`Mensaje recibido: ${data}`);
      io.emit('cliente', data);
    });
    socket.on('vehiculo', (data) => {
      // console.log(`Mensaje recibido: ${data}`);
      io.emit('vehiculo', data);
    });
    socket.on('tecnico', (data) => {
      // console.log(`Mensaje recibido: ${data}`);
      io.emit('tecnico', data);
    });
    socket.on('morefaccion', (data) => {
      // console.log(`Mensaje recibido: ${data}`);
      io.emit('morefaccion', data);
    });
    socket.on('taller', (data) => {
      // console.log(`Mensaje recibido: ${data}`);
      io.emit('taller', data);
    });


    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
  });

  return server;
};

module.exports = createSocketServer;