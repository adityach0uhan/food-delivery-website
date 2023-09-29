const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')
const bcrypt = require('bcryptjs');

const { body, validationResult } = require('express-validator');
router.post('/createUser',
    [
        body('email', "Email Galat hai bhai").isEmail(),
        body('name', "Naam Shi se Likh Le bhai").notEmpty(),
        body('password', "Password ka size badha bhai ").isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            // express-validator code
            const result = await validationResult(req);
            if (result.isEmpty()) {
                 bcrypt.hash(req.body.password, 10, async function (err, hashPassword) {
                    if (err) {
                        console.log("Something broke while encrypting the password")
                    } else {
                        console.log("Password Encrypted Successfully")
                // mondodb code 
                await user.create({
                    name: req.body.name,
                    email: req.body.email,
                    location: req.body.location,
                    password: hashPassword
                })
                    }
                });
                res.json({ success: true })

            } else {
                res.send({ errors: result.array() });
            }
        } catch (error) {
            res.json({ success: false })
            console.log(error)
        }

    })

module.exports = router