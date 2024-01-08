import express from 'express';
import settings from './settings.js';
import { db } from './models/connection.js';
import customersRouter from './routes/customers.routes.js';

db.connect();

const app = express();

app.use(express.json());

app.use('/api/clientes', customersRouter);

app.listen(settings.port, () => {
  console.log(`Servidor escuchando en el puerto ${settings.port}`);
});