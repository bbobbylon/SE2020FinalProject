const mongoose = require('mongoose')
const express = require ('express')
const router = express.Router()

//template model
let templateSchema = require('../models/Template');
const Template = require('../models/Template');

/*CREATE TEMPLATE
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


*/


router.route('/add').post((req, res) => {
    const title = req.body.title;
    const instructorName = req.body.instructorName;
    const courseNumber = req.body.courseNumber;
    const courseCreditHours = req.body.courseCreditHours;
    const officeNumber = req.body.officeNumber;
    const officeHours = req.body.officeHours;
    const phoneNumber = req.body.phoneNumber;
    const emailAddress = req.body.emailAddress;
    const courseDescription = req.body.courseDescription;
    const meetingTimes = req.body.meetingTimes;
    const meetingLocation = req.body.meetingLocation;
    const courseMaterials = req.body.courseMaterials;
    const courseSchedule = req.body.courseSchedule;
    const gradingScale = req.body.gradingScale;
    const extraInfo = req.body.extraInfo;
    

    const newTemplate = new templateSchema({
        title, 
        instructorName, 
        courseNumber,
        courseCreditHours,
        officeNumber,
        officeHours,
        phoneNumber,
        emailAddress,
        courseDescription,
        meetingTimes,
        meetingLocation,
        courseMaterials,
        courseSchedule,
        gradingScale,
        extraInfo,
    });


    newTemplate.save()
    .then(() => res.json("Template added!"))
    .catch(err => res.status(400).json('Error:' + err))
});


//READ TEMPLATE
router.route('/').get((req, res)=> {
    templateSchema.find()
    .then(templates => res.json(templates))
    .catch(err => res.status(400).json('Error:' + err))
})



router.route('/:id').get((req, res) => {
    templateSchema.findById(req.params.id)
      .then(template => res.json(template))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  //update template
  router.route('/update/:id').post((req, res) => {
    templateSchema.findById(req.params.id)
    .then(template => {
        template.title = req.body.title
        template.instructorName = req.body.instructorName
        template.courseNumber = req.body.courseNumber
        template.courseCreditHours = req.body.courseCreditHours
        template.officeNumber = req.body.officeNumber
        template.officeHours = req.body.officeHours
        template.phoneNumber = req.body.phoneNumber
        template.emailAddress - req.body.emailAddress
        template.courseDescription = req.body.courseDescription
        template.meetingTimes = req.body.meetingTimes
        template.meetingLocation = req.body.meetingLocation
        template.courseMaterials  = req.body.courseMaterials
        template.courseSchedule = req.body.courseSchedule
        template.gradingScale = req.body.gradingScale
        template.extraInfo = req.body.extraInfo
        

        template.save()
        .then(() => res.json('Template Udated!'))
        .catch(err => res.status(400).jjson('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error:' + err ))
})

  router.route('/:id').delete((req, res) => {
    templateSchema.findByIdAndDelete(req.params.id)
      .then(() => res.json('Template deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });













/*GET SINGLE TEMPLATE
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
*/



/*DELETE TEMPLATE   
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
*/
module.exports = router