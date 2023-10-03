import express from "express";
const cartRouter = express.Router() // importo todas las funcionalidades de router

const cart =[]

cartRouter.get("/", (req,res) =>{

    res.json(cart)
})
cartRouter.post("/",(res,req)=>{
    const newProduct= req.body;
    cart.push(newProduct);
    res.status(201).json(newProduct);
})

export default cartRouter
// con esto exporto y puedo importarlo en otro archivo

