import express from "express"
import cartRouter from './routes/cartRouter.js';
import productRouter from "./routes/productRouter.js";
import indexRouter from './routes/indexRouter.js'
import bodyParser from 'body-parser';

const app = express()
const puerto = 8080

app.use(bodyParser.json())

app.use('/api/products',productRouter)// cuando entre a estas ruta, se va al router
app.use('/api/cart',cartRouter)// cuando entre a estas ruta, se va al router
app.use('/',indexRouter)// cuando entre a estas ruta, se va al router

app.listen(puerto,(req,res)=>{
    console.log(`servidor corriendo en puerto: ${ puerto }` )
})


