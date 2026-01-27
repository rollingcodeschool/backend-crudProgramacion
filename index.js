import Server from './src/server/config.js'
import router from './src/routes/index.routes.js'

//instanciar la clase server
const server = new Server();
//http://localhost:3000/api/servicios/test
//agregar las rutas del proyecto
server.app.use('/api', router)
//invocar al metodo listen
server.listen();