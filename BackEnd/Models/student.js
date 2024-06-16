const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    rollNo:{
        type:String,
        required:true
    },
    class: {
        type: String,
        required: true
    },
    currLevel: {
        type: String,
        default: "0"
    },
    school: {
        type: String,
        default: "Unknown"
    },
    lang: {
        type: String,
        default: "en"
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;