const http = require('http');
const socketIO = require('socket.io');
// const httpServer = require('http').createServer(app);

const whiteList=['https://speed-pro-desarrollo.web.app','http://localhost:4200','https://apputos.app'];
const createSocketServer = (app) => {
  const server = http.createServer(app);
  const io = socketIO(server,
    {

      cors: {
        origin: whiteList,
        methods: ["GET", "POST"],
        credentials: true
      },
      allowEIO3: true,
    }
  );

  io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado:'+ socket.id);

    socket.on('operacion', (data) => {
      io.emit('operacion', data);
    });
    socket.on('g_orden', (data) => {
      io.emit('g_orden', data);
    });
    socket.on('p_orden', (data) => {
      io.emit('p_orden', data);
    });
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
    socket.on('gerente', (data) => {
      //manejo de informacion de gerente emicion y recepcion
      io.emit('gerente', data);
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
    socket.on('indexados_sucursales', (data) => {
      console.log('indexados_sucursales', data)
      //manejo de informacion de marca emicion y recepcion
      io.emit('indexados_sucursales', data);
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