import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import settings from './settings.js';
import { db } from './models/connection.js';
import customersRouter from './routes/customers.routes.js';

db.connect();

const app = express();

app.use(express.json(), morgan('dev'), cors({
  origin: settings.clientUrl
}));

app.use('/api/customers', customersRouter);

app.listen(settings.port, () => {
  console.log(`Server listening on port ${settings.port}`);
});