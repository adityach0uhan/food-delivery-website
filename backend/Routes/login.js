const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')
const { body, validationResult } = require('express-validator');

router.post('/login',
    [
        body('email', "Email galat hai bhai").isEmail(),
        body('email', "email he nhi dala").notEmpty(),
        body('password', "Password he nhi dala").notEmpty(),

    ], async (req, res) => {
        try {
            const result = await validationResult(req);
            if (result.isEmpty()) {
                const userEmail = req.body.email;
                const userPassword = req.body.password;

                const userDetails = await user.findOne({ email: userEmail })
                if (userDetails === null) {
                    return res.json({ error: "No Email found in our Database" })
                }
                else {
                    if (userDetails.password === userPassword) {
                        res.json({ message: "Email and password Matched" })
                    } else {
                        res.json({ message: "Email and Password didn't Matched" })
                    }
                }

            } else {
                return res.send({ errors: result.array() });
            }

            

        }
        catch (error) {
            res.json({ success: false })
            console.log(error)
        }
    })

module.exports = router