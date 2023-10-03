import express from "express";
const indexRouter = express.Router() // importo todas las funcionalidades de router


indexRouter.get('/',(req,res)=>{
    res.send('Hola mundo')
})


export default indexRouter