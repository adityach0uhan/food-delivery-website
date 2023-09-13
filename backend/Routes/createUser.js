const express = require('express');
const router = express.Router();
const user = require('../models/SignIn')

const { body, validationResult } = require('express-validator');
router.post('/createUser',
    [
        body('email',"Email Galat hai bhai").isEmail(),
        body('name', "Naam Shi se Likh Le bhai").notEmpty(),
        body('password',"Password ka size badha bhai ").isLength({ min: 6 })
    ],
    async (req, res) => {
        try {

            // validator code -----
            const result = await validationResult(req);
            if (result.isEmpty()) {
                return res.send(`Hello`);
            } else {
                res.send({ errors: result.array() });
            } 
            // ----validator code

            //Mongodb code
            await user.create({
                name: req.body.name,
                email: req.body.email,
                location: req.body.location,
                password: req.body.password
            })
            res.json({ success: true })

        } catch (error) {
            res.json({ success: false })
            console.log(error)
        }

    })

module.exports = router