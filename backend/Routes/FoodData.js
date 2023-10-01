const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { BackendData } = require('../db')

router.post('/foodData', (req, res) => {
    const FoodlistCollection = mongoose.connection.db.collection('FoodList');
    const FoodcategoryCollection = mongoose.connection.db.collection('FoodCategories');
    const FoodCategory = FoodcategoryCollection.find({}).toArray();
    const Foodlist = FoodlistCollection.find({}).toArray();
    FoodCategory.then(Foodcat => {
        const Foodcategory=Foodcat
        Foodlist.then(Foodlist => {
            const BackendData = [Foodlist, Foodcategory]
            res.send(BackendData)
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })

})



module.exports = router