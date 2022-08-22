import {signup , signin , allUsers} from '../controllers/user.js'
import express from 'express';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/all', allUsers);

export default router;

