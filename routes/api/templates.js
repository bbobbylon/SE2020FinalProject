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


//GET SINGLE TEMPLATE
router.route ('/editTempalte').get((req, res) =>{
    templateSchema.findById(req.params.id, (error, data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})



//UPDATE TEMPLATE

router.route('/updateTemplate').put((req,res, next) =>{
    templateSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) =>{
        if (error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('Template successfully updated')
        }
    }
    )
})


//DELETE TEMPLATE   
router.route('/deleteTemplate').delete((req, res, next) =>{
templateSchema.findByIdAndRemove(req.params.id, (error, data) =>{
    if(error){
        return next (error)
    }else{
        res.status(200).json({
            msg:data
        })
    }
})
})

module.exports = router