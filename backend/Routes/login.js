const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')


router.post('/login', async (req, res) => {
    try {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const userDetails= await user.findOne({ email:userEmail })
        if (!userEmail) {
            return res.json({error:"Invalid or Null Email"})
        }
        if (userDetails === null) {
            return res.json({error:"No Email found in our Database"})
        }
        else {
            if (userDetails.password === userPassword) {
                return res.json({message:"Email and password Matched"})
            } else {
                return res.json({message:"Email and Password didn't Matched"})
            }
        }
    } catch (error) {
        res.json({ success: false })
        console.log(error)
    }
})

module.exports = router