import express from 'express';

const router = express.Router();

router.get('/test',(req,res)=>{
    res.json({massage:"i am herare shivam jihiii"});
})

export default router;

