import express from 'express'
import payment from '../controllers/controllers.payment.js';

const router=express.Router();
router.post('/payment',payment);

export default router;