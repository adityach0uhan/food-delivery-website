const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')


router.post('/login', async (req, res) => {
    try {
        res.send("Login page hit")
        await user.find({
            email: req.body.email,
            password: req.body.password
        })
        res.json({ success: false })

    } catch (error) {
        res.json({ success: false })
        console.log(error)
    }
})

module.exports = router