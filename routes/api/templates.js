let mongoose = require('mongoose'),
express = require ('express'),
router = express.Router();

//template model
let templateSchema = require('../models/Template')

//CREATE TEMPLATE
router.route('/createTemplate').post((req, res, next) => {
    templateSchema.create(req.body, (error, data)=> {
        if (error){
            return next (error)

        } else {
            console.log(data)
            res.json(data)
        }
    })
});

//READ TEMPLATE
router.route('/').get((req, res)=> {
    templateSchema.find((error, data) =>{
        if (error){
            return next (error)

        } else {
            console.log(data)
            res.json(data)
        }
    })
})


