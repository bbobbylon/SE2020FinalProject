const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const templateSchema = new Schema({
    teacherName: {type: String, required: true},
    courseNumber: {type: Number, required: true, minlength:5},
    classTitle: {type: String, requiered: true},
    officeNumber: {type : String, reuired : true},
    officeHours: {type: String, required: true}, 
    courseLength: {type: String, reuired : true}
}, {
    timestamps: true,
    collection: 'templates',
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;