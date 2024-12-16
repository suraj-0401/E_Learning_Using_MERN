import express from 'express';
import {signup,login, editProfile} from '../controllers/controllers.user.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login',login);
router.put('/edit', editProfile);
export default router;