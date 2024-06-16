const mongoose= require("mongoose");

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    correct_ans: { type: String, required: true },
    class:{type:String,required:true},
    level:{type:String,required:true},
   // quesSeq:{type:Number,required:true}
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;