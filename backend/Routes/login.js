const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')


router.post('/login', async (req, res) => {
    try {
        const userEmail=req.body.email
        const userDetails= await user.find({ userEmail })
        if (!userEmail) {
            return res.json({error:"Galat mat dal bhai"})
        }
        else {
            res.send(userDetails)
        }

        

    } catch (error) {
        res.json({ success: false })
        console.log(error)
    }
})

module.exports = router