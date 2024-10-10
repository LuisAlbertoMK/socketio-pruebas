const http = require('http');
// const socketIO = require('socket.io');
// const httpServer = require('http').createServer(app);
const createSocketServer = (app) => {
  const server = http.createServer(app);
  // const io = socketIO(server, {
  //   cors: {
  //     origin: ['http://localhost:4200','https://speed-pro-desarrollo.web.app'],
  //     methods: ['GET', 'POST']
  //   }
  // });

  const io = require('socket.io')(server, {
    cors: {
      origin: [
        "https://speed-pro-desarrollo.web.app",
        // Puedes añadir más orígenes si es necesario
        "http://localhost:4200" // Para desarrollo local
      ],
      methods: ["GET", "POST"],
      credentials: true,
      allowedHeaders: ["my-custom-header"]
    }
  });
  io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado:'+ socket.id);

    socket.on('actualizacion', (data) => {
      //manejo de informacion de actualizacion emicion y recepcion
      io.emit('actualizacion', data);
    });
    socket.on('empresa', (data) => {
      //manejo de informacion de empresa emicion y recepcion
      io.emit('empresa', data);
    });
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
    socket.on('marca', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('marca', data);
    });
    socket.on('indexados_anios', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_anios', data);
    });
    socket.on('indexados_empresas', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_empresas', data);
    });
    socket.on('indexados_formasPago', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_formasPago', data);
    });
    socket.on('indexados_servicios', (data) => {
      console.log('indexados_servicios', data)
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_servicios', data);
    });
    socket.on('indexados_marcas', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_marcas', data);
    });
    socket.on('indexados_categorias', (data) => {
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_categorias', data);
    });


    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
  });

  return server;
};

module.exports = createSocketServer;