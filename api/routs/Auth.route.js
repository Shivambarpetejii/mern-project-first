import express from 'express';
import { userSingUp } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post('/singUp',userSingUp)

export default router;