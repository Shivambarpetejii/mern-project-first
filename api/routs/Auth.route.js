import express from 'express';
import { singin, userSingUp } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post('/singUp',userSingUp)
router.post('/singIn',singin)

export default router;