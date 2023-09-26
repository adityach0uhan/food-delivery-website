const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')
const { check, validationResult } = require('express-validator');
const emailValidator = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
router.post('/login',
    [
        check('email').matches(emailValidator).withMessage('Invalid email format'),
        check('email', "email he nhi dala").notEmpty(),
        check('password', "Password he nhi dala").notEmpty(),
    ], async (req, res) => {
        try {
            const result = await validationResult(req);
            if (result.isEmpty()) {
                const userEmail = req.body.email;
                const userPassword = req.body.password;

                const userDetails = await user.findOne({ email: userEmail })
                if (userDetails === null) {
                    return res.status(200).json({ error: "No Email found in our Database" })
                }
                else {
                    if (userDetails.password === userPassword) {
                        res.status(200).json({ message: "Email and password Matched" },{success:true})
                    } else {
                        res.status(401).json({ message: "Email and Password didn't Matched" }, { success: false })
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