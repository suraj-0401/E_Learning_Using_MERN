import express from 'express'
import { fetchActiveUsers } from '../controllers/controllers.activeUsers.js';

const router=express.Router();
router.get('/activeUser',fetchActiveUsers);

export default router;