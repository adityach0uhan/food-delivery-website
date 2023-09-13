const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')

router.post('/createUser', async (req, res) => {

    try {
        await user.create({
            name: "Aditya",
            email: "aditya@gmail.com",
            location: "Xyz",
            password: "Hello"
        })
        res.json({ success: true })

    } catch (error) {
        res.json({ success: false })
        console.log(error)
    }

})

module.exports = router