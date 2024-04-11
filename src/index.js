
const createSocketServer = require('./socket');

const server = createSocketServer();


server.listen(3001, () => {
    console.log('Servidor ejecutándose en http://localhost:3001');
  });

