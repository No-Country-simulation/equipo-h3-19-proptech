import 'dotenv/config'
import app from './src/app';
import http from 'http';
app.set('port', process.env.PORT || 3000);

const startServer = async () => {
  try {
    const server = http.createServer(app)
    server.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en puerto ${app.get('port')}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
