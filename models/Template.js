const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const templateSchema = new Schema({
    title: {type: String, required: true},
    instructorName: {type: String, required: true, minlength:2},
    courseNumber: {type: String, requiered: true},
    courseCreditHours: {type : String, reuired : true},
    officeNumber: {type: String, required: true}, 
    officeHours: {type: String, reuired : true},
    phoneNumber: {type: String, required: true, maxlength: 10}, 
    emailAddress: {type: String, reuired : true, minlength:10},
    courseDescription: {type: String, required: true}, 
    meetingTimes: {type: String, reuired : true},
    meetingLocation: {type: String, required: true}, 
    courseMaterials: {type: String, reuired : true},
    courseSchedule: {type: String, required: true}, 
    gradingScale: {type: String, reuired : true},
    extraInfo: {type: String, required: true}, 
    date: {
        type: Date,
        default: Date.now
      }
    
}, {
    timestamps: true,
    collection: 'templates',
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;