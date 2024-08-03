import express from 'express';
import { addToCart ,getCart ,deleteFromCart} from './controller.js';


const router =express.Router();
router.post('/addToCart',addToCart)
router.get('/cart',getCart)
router.delete('/cart/:id', deleteFromCart);


export default router;
