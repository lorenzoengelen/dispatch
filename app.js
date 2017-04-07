const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares/index');
const routes = require('./controllers/index');

let server;

if (cluster.isMaster) {
  
  console.log(`Master ${process.pid} is running`);
  // fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });

} else {

  const app = express();
  app.set('port', process.env.PORT || 3000);

  // middlewares
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(middlewares);
  // controllers
  app.use('/', routes);

  server = http.createServer(app);
  server.listen(app.get('port'), () => {
    console.log(`Worker ${process.pid} listening on port ${app.get('port')}`);
  });
  
}