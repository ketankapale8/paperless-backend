import {addCart , getAllCarts} from '../controllers/cart.js'
import express from 'express';
const router = express.Router();

router.post('/cart' , addCart);
router.get('/allcarts', getAllCarts);


export default router;