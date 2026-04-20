import express from "express"
import { getDb } from "../database/database.js";

const router = express.Router()

router.post('/register', async (req, res) => {
    const {login, password} = req.body

    if(!login || !password){
        res.json({seccess: false, error: "unknown"});
    }

    if(password.length < 4){
        res.json({success: false, error: "Password < 4 symbols!"})
    }

    const db = getDb();
    const hashedPassword = await bcrypt.hash(password, 10)

    await db.run(`
        INSERT INTO users(login, password) VALUES(?,?)
        `, [login, hashedPassword]
    );
    console.log("SAVE SUCCESS")
});

router.post('/login', async (req, res) => {
    const {login, password} = req.body
    const db = getDb();

    if(!login){
        res.json({success: false, error: "None login"})
    }

    const user = await db.get(`SELECT * FROM user WHERE login = ?`, [login]);

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(isPasswordValid){
        res.json({success: true, message: "Auth success"})
    }
});


export default router;