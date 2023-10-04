import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';

const app = express();
const puerto = 8080;

app.use(bodyParser.json());

app.use('/api/products', productRouter);
app.use('/api/carts',cartRouter)

app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto: ${puerto}`);
});


