const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { BackendConnection } = require('../db')

router.post('/foodData', (req, res) => {
    const FoodlistCollection = mongoose.connection.db.collection('FoodList');
    const FoodcategoryCollection = mongoose.connection.db.collection('FoodCategories');
    const FoodCategory = FoodcategoryCollection.find({}).toArray();
    const Foodlist = FoodlistCollection.find({}).toArray();
    FoodCategory.then(Foodcat => {
        const Foodcategory = Foodcat
        Foodlist.then(Foodlist => {

            res.send({ listOfFood: Foodlist, CategoriesOfFood: Foodcat })
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })

})

module.exports = router