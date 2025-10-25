// index.js (en la raíz del proyecto)

import router from './src/routes/index.routes.js'; 
import Server from './src/server/config.js';

const server = new Server();

//http://localhost:3000/api/tareas/

// Usar las rutas
server.app.use('/api', router);

server.listen();