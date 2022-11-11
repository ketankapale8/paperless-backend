import express from 'express';
import {storeFilter} from '../controllers/storeFilter.js'
const router = express.Router();

router.get('/storeinformation', storeFilter)



export default router;