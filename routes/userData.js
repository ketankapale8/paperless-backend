import {addUserCart} from '../controllers/userData.js'
import express from 'express';
const router = express.Router();

router.post('/addusercart' , addUserCart);


export default router;