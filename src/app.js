import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/productRouter.js';

const app = express();
const puerto = 8080;

app.use(bodyParser.json());

app.use('/api/products', productRouter);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto: ${puerto}`);
});


