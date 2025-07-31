module.exports = {
  app: {
    port: process.env.port
  },
  cors: {
    whitelist: [
      'https://speed-pro-desarrollo.web.app',
      'http://localhost:4200',
      'https://apputos.app',
    ],
  },
  jwt: {
    secret: process.env.jwt || 'tu_clave_secreta_aqui', // Cambia esto en producción
  },
};