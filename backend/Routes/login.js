const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')
const bcrypt = require('bcryptjs');

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
                    return res.json(200, { success: false })
                }
                else {
                    const storedHash = userDetails.password; // Retr
                    bcrypt.compare(userPassword, storedHash, function (err, result) {
                        if (err) {
                            res.status(400).json({
                                success: false,
                                message:"Something broke while decrypting the password"
                            })
                        } else if (result) {
                            // Passwords match
                            res.status(200).json({
                                success: true,
                                messsage: "Shi hai bhai match hogya email aur password"
                            })
                        } else {
                            res.status(401).json({
                                success: false,
                                message: "kuch to galat hai bhai email aur password match ni hue"
                            })
                        }
                    });

                }

            } else {
                return res.send({ errors: result.array() });
            }



        }
        catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

module.exports = router