import express from 'express';
import settings from './settings.js';
import { db } from './models/connection.js';

db.connect();

const app = express();

app.use(express.json());

app.listen(settings.port, () => {
  console.log(`Servidor escuchando en el puerto ${settings.port}`);
});