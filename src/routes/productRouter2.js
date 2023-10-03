import express from "express";

import ProductManager from "../logic/productManager.js";
const productsRouter = express.Router() // importo todas las funcionalidades de router

const products =[]

productsRouter.get("/", (req,res) =>{
    res.json(products)
})
productsRouter.post("/",(res,req)=>{
    const newProduct= req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
})

// products con un id a buscar 
productsRouter.get('/:pid',(req,res)=>{
    let pID = req.params.pid
    if (pID) {
        const product = ProductManager.products.find((product) => product.id == pID);
        if (product) {
            res.send(product);
        } else {
            res.send("Producto no encontrado o parametro no valido");
        }
    }
})

//   /products con limite de productos 
productsRouter.get('/',(req,res)=>{
    let limit = req.query.limit
    let ProductManagerProducts = ProductManager.products
    
    if (limit) {
        if (limit < 0 || limit == 0) {
            res.send("El numero ingresado por parametro no es valido")
        } 
        else{
            if (limit < ProductManagerProducts.length) {
                let newArray = []
                for (let index = 0; index < limit; index++) {
                    newArray.push(ProductManagerProducts[index]);
                }
                res.send(newArray)   
            }
            else{
                // limit < length de productos
                res.send(ProductManagerProducts)   
            }
        }
    }   
    else{
        //devolver todos los productos
        res.send(ProductManagerProducts)
    }

})
//----------------------------------------------------------------------------------------------------------


// app.post('/',(req,res)=>{

//     // title:String,
//     // - description:String
//     // - code:String
//     // - price:Number
//     // - status:Boolean
//     // - stock:Number
//     // - category:String
//     // - thumbnails:Array de Strings
// })


export default productsRouter
// con esto exporto y puedo importarlo en otro archivo


