import { Router } from "express";
import { login , register } from "./index.js";

const router = Router();

router.post('/login', async (req,res)=>{
    const data = await login(req.body);
    // Error validation
    if (data.error) {
        return res.status(403).json({ error: data.error });
    };
    // Sucess try
    return res.status(200).json({ data });
});

router.post('/register', async (req,res)=>{
    const data = await register(req.body);
    // Error validation
    if (data.error) {
        return res.status(400).json({ error: data.error})
    };
    // Sucess try
    return res.status(201).json({ data });
});



export default router;