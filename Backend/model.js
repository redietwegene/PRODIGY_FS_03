import mongoose from "mongoose";

const CartSchema= new mongoose.Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})

const Cart =mongoose.model('Cart',CartSchema)

export {Cart}