import {signup , signin , allUsers , updateUser} from '../controllers/user.js'
import express from 'express';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/all', allUsers);
router.put('/update/:id',updateUser)

export default router;

