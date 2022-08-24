import {addUserCart , getAllUserCarts} from '../controllers/userData.js'
import express from 'express';
const router = express.Router();

router.post('/addusercart' , addUserCart);
router.get('/getallusercart' , getAllUserCarts)


export default router;