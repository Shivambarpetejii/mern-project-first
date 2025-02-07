import express from 'express';
import { google, singin, userSingUp } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post('/singUp',userSingUp)
router.post('/singIn',singin)
router.post('/google',google)

export default router;