import {addUserCart} from '../controllers/userData.js'
import express from 'express';
const router = express.Router();

router.post('/addusercart' , addUserCart);
// router.get('/allcarts', getAllCarts);


export default router;