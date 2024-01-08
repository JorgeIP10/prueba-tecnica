import express from 'express';
import settings from './settings.js';

const app = express();

app.use(express.json());

app.listen(settings.port, () => {
  console.log(`Servidor escuchando en el puerto ${settings.port}`);
});