const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const templateSchema = new Schema({
    title: {type: String, required: true},
    instructorName: {type: Number, required: true, minlength:5},
    courseNumber: {type: String, requiered: true},
    courseCreditHours: {type : String, reuired : true},
    officeNumber: {type: String, required: true}, 
    officeHours: {type: String, reuired : true},
    phoneNumber: {type: String, required: true}, 
    emailAddress: {type: String, reuired : true},
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